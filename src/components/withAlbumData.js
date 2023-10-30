// src/components/withAlbumData.js

// Import necessary modules from React and Gatsby
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

    // Filter the fetched data based on the 'album' prop to retrieve data specific to the current album
    // 'relativeDirectory' is assumed to represent an album's name or identifier
    const filteredData = data.allFile.edges.filter(edge => edge.node.relativeDirectory === props.album);

    // Spread the original props and add the 'data' prop to the wrapped component
    // The wrapped component now receives the filtered album data as a prop
    return <Component {...props} data={filteredData} />;
  };
};
