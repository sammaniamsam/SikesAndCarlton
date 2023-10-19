// src/components/withAlbumData.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const withAlbumData = (Component) => {
  return (props) => {
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

    // Filter the data based on the album prop
    const filteredData = data.allFile.edges.filter(edge => edge.node.relativeDirectory === props.album);
    return <Component {...props} data={filteredData} />;
  };
};
