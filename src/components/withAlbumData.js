// src/components/withAlbumData.js
import React from 'react';
import { graphql, StaticQuery } from "gatsby";

export const withAlbumData = (Component) => {
  return (props) => (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data) => {
        // Filter the data based on the album prop
        const filteredData = data.allFile.edges.filter(edge => edge.node.relativeDirectory === props.album);
        return <Component {...props} data={filteredData} />;
      }}
    />
  );
};
