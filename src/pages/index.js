import * as React from "react";
import { useRef, useState } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ListGroup from 'react-bootstrap/ListGroup';
import AlbumDropdown from '../components/AlbumDropdown';
import AlbumList from '../components/AlbumList';

const albums = [
  { title: "Dry Creek Bed", path: "dry-creek-bed" },
  { title: "Patio / Stone Pavers with Rounded Edges", path: "patio/stone-pavers-with-rounded-edges" },
  // Add more albums here
];

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState(albums);
  const albumRefs = useRef(albums.map(() => React.createRef()));

  const scrollToAlbum = (index) => {
    albumRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    const filtered = albums.filter(album => album.title.toLowerCase().includes(value));
    setFilteredAlbums(filtered);
  };

  return (
    <Layout>
      <div>
        <ListGroup.Item>
          <AlbumDropdown
            searchValue={searchValue}
            handleSearch={handleSearch}
            filteredAlbums={filteredAlbums}
            scrollToAlbum={scrollToAlbum}
          />
        </ListGroup.Item>
        <AlbumList albums={albums} albumRefs={albumRefs} />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage;
