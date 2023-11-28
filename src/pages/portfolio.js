// src/pages/portfolio.js

import * as React from "react";
import { useRef } from "react";

import Layout from "../components/layout";
import AlbumList from "../components/AlbumList";
import { useAlbums } from "../hooks/useAlbums";

const PortfolioPage = () => {
  const albums = useAlbums();
  const albumRefs = useRef(albums.map(() => React.createRef()));

  return (
    <Layout>
      <AlbumList albums={albums} albumRefs={albumRefs} />
    </Layout>
  );
};

export default PortfolioPage;
