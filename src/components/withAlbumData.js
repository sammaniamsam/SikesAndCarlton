// src/components/withAlbumData.js

// Import necessary modules from React and Gatsby
import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import exifReader from 'exifreader';

// Create a Higher Order Component (HOC) to fetch album data
export const withAlbumData = (Component) => {
  // This function receives a Component as its parameter
  return (props) => {
    // Use Gatsby's useStaticQuery hook to perform a static GraphQL query.
    const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: {
            sourceInstanceName: { eq: "albums" }
          }
        ) {
          edges {
            node {
              relativeDirectory
              publicURL
              childImageSharp {
                thumb: gatsbyImageData(
                  width: 270
                  height: 270
                  placeholder: BLURRED
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `);

    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
      const filteredData = data.allFile.edges.filter(edge => edge.node.relativeDirectory === props.album);

      // Function to extract and parse EXIF data
      const extractEXIFData = async (imagePath) => {
        const response = await fetch(imagePath);
        const buffer = await response.arrayBuffer();
        return exifReader.load(buffer);
      };

      function sortEdgesByExifDate(edges) {
        // Function to format the EXIF date string
        const formatExifDate = (dateStr) => {
          return dateStr.replace(/:/, '-').replace(/:/, '-').replace(' ', 'T');
        };

        // Sorting the array of edges based on the exifDate
        return edges.sort((a, b) => {
          const dateA = new Date(formatExifDate(a.node.exifDate));
          const dateB = new Date(formatExifDate(b.node.exifDate));
          return dateA - dateB;
        });
      }

      // Sorting logic
      const sortAlbumData = async () => {
        for (let edge of filteredData) {
          const exifData = await extractEXIFData(edge.node.publicURL);
          edge.node.exifDate = exifData['DateTimeOriginal'].description;
        }

        setSortedData(sortEdgesByExifDate(filteredData));
      };

      sortAlbumData();
    }, [props.album, data]);

    return <Component {...props} data={sortedData} />;
  };
};
