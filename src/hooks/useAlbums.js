// hooks/useAlbums.js

import { useStaticQuery, graphql } from "gatsby";

export const useAlbums = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "albums" } }) {
        edges {
          node {
            relativeDirectory
            publicURL
          }
        }
      }
    }
  `);

  const albums = Array.from(
    new Set(data.allFile.edges.map(({ node }) => node.relativeDirectory))
  )
    .map((directory) => {
      const photos = data.allFile.edges.filter(
        (edge) => edge.node.relativeDirectory === directory
      );

      // Extract the names from the publicURLs
      const photoNames = photos.map((photo) =>
        photo.node.publicURL
          .split("/")
          .pop()
          .split("_")
          .join("")
          .replace(/\.jpg$/, "")
      );

      return {
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
        photoNames: photoNames,
      };
    })
    .filter((album) => album.title.length > 0 && album.path.length > 0)
    .sort((a, b) => {
      const getTimestampFromName = (name) => (isNaN(name) ? 0 : name);

      const timestampA = Math.max(...a.photoNames.map(getTimestampFromName));
      const timestampB = Math.max(...b.photoNames.map(getTimestampFromName));

      return timestampB - timestampA;
    });

  return albums;
};
