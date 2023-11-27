// src/pages/portfolio.js

import * as React from "react";
import { useRef } from "react";

import Layout from "../components/layout";
import ListGroup from "react-bootstrap/ListGroup";
import AlbumList from "../components/AlbumList";
import SearchAlbums from "../components/SearchAlbums";
import { useAlbums } from "../hooks/useAlbums";

const PortfolioPage = () => {
  const albums = useAlbums();
  const [filteredAlbums, setFilteredAlbums] = React.useState(albums);
  const albumRefs = useRef(albums.map(() => React.createRef()));

  const scrollToAlbum = (index) => {
    albumRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Layout>
      <ListGroup.Item>
        <SearchAlbums
          albums={albums}
          onSearchResult={setFilteredAlbums}
          scrollToAlbum={scrollToAlbum}
        />
      </ListGroup.Item>
      <AlbumList albums={filteredAlbums} albumRefs={albumRefs} />
    </Layout>
  );
};

export default PortfolioPage;
