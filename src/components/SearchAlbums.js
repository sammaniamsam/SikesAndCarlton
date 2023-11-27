// components/SearchAlbums.js

import React, { useState } from "react";
import AlbumDropdown from "./AlbumDropdown";

const SearchAlbums = ({ albums, onSearchResult, scrollToAlbum }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    const filtered = albums.filter((album) =>
      album.title.toLowerCase().includes(value)
    );
    onSearchResult(filtered);
  };

  return (
    <AlbumDropdown
      searchValue={searchValue}
      handleSearch={handleSearch}
      filteredAlbums={albums}
      scrollToAlbum={scrollToAlbum}
    />
  );
};

export default SearchAlbums;
