// src/pages/portfolio.js

import * as React from "react";
import { useRef } from "react";

import Layout from "../components/layout";
import { useAlbums } from "../hooks/useAlbums";
import ListGroup from "react-bootstrap/ListGroup";
import AlbumItem from "../components/AlbumItem";
import Seo from "../components/seo";

const PortfolioPage = () => {
  const albums = useAlbums();
  const albumRefs = useRef(albums.map(() => React.createRef()));

  return (
    <Layout maxWidthOverride={"125rem"}>
      <Seo title="Home" />
      <ListGroup variant={"flush"}>
        {albums.map((album, index) => (
          <AlbumItem key={index} album={album} ref={albumRefs.current[index]} />
        ))}
      </ListGroup>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default PortfolioPage;
