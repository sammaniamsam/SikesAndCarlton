// src/components/withAlbumData.js

// Import necessary modules from React and Gatsby
import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

// Create a Higher Order Component (HOC) to fetch album data
export const withAlbumData = (Component) => {
  // This function receives a Component as its parameter
  return (props) => {
    // Use Gatsby's useStaticQuery hook to perform a static GraphQL query.
    const data = useStaticQuery(graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "albums" } }) {
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
      const filteredData = data.allFile.edges.filter(
        (edge) => edge.node.relativeDirectory === props.album
      );

      // Sort the filteredData based on image names
      const sortedFilteredData = filteredData.slice().sort((a, b) => {
        const nameA = a.node.publicURL.split("/").pop(); // Extract image name from URL
        const nameB = b.node.publicURL.split("/").pop();

        // Assuming image names are in the format "1.jpg", "2.jpg", etc.
        return parseInt(nameA) - parseInt(nameB);
      });

      setSortedData(sortedFilteredData);
    }, [props.album, data]);

    return <Component {...props} data={sortedData} />;
  };
};
