import * as React from "react";
import { useRef, useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import Seo from "../components/seo";
import ListGroup from 'react-bootstrap/ListGroup';
import AlbumDropdown from '../components/AlbumDropdown';
import AlbumList from '../components/AlbumList';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "albums"}}) {
        edges {
          node {
            relativeDirectory
          }
        }
      }
    }
  `);

  // Get unique album directories with files
  const albums = Array.from(new Set(data.allFile.edges.map(({ node }) => node.relativeDirectory)))
    .map(directory => ({
      title: directory
        .split('/')
        .pop()
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '), // Assuming the last part of the path is the album title
      path: directory
    }))
    .filter((album) => album.title.length > 0 && album.path.length > 0);

  const [searchValue, setSearchValue] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState(albums);
  const albumRefs = useRef(albums.map(() => React.createRef()));

  const scrollToAlbum = (index) => {
    albumRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  console.log(data)

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
        <AlbumList albums={filteredAlbums} albumRefs={albumRefs} />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage;
