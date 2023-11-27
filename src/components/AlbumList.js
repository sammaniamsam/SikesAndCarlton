import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AlbumItem from "./AlbumItem";

const AlbumList = ({ albums, albumRefs }) => {
  return (
    <ListGroup variant={"flush"}>
      {albums.map((album, index) => (
        <AlbumItem key={index} album={album} ref={albumRefs.current[index]} />
      ))}
    </ListGroup>
  );
};

export default AlbumList;
