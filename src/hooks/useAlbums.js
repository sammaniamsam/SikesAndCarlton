// hooks/useAlbums.js

import { useStaticQuery, graphql } from "gatsby";

export const useAlbums = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "albums" } }) {
        edges {
          node {
            relativeDirectory
          }
        }
      }
    }
  `);

  const albums = Array.from(
    new Set(data.allFile.edges.map(({ node }) => node.relativeDirectory))
  )
    .map((directory) => ({
      title: directory
        .split("/")
        .map((subDirectory) => {
          return subDirectory
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        })
        .join(" / "),
      path: directory,
    }))
    .filter((album) => album.title.length > 0 && album.path.length > 0)
    .sort((a, b) => a.title.localeCompare(b.title));

  return albums;
};
