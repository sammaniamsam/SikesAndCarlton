import React from "react";
import { Dropdown, FormControl } from "react-bootstrap";

const AlbumDropdown = ({
  searchValue,
  handleSearch,
  filteredAlbums,
  scrollToAlbum,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100">
        Select Album
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        <FormControl
          autoFocus
          style={{ width: "calc(100% - 2rem)" }} // Adjust width to account for margins
          className="mx-3 my-2"
          placeholder="Type to filter..."
          onChange={handleSearch}
          value={searchValue}
        />
        {filteredAlbums.map((album, index) => (
          <Dropdown.Item key={index} onClick={() => scrollToAlbum(index)}>
            {album.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AlbumDropdown;
