import React from "react";
import ImageGallery from "../components/imageGallery";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const AlbumItem = React.forwardRef(({ album }, ref) => {
  return (
    <ListGroup.Item ref={ref}>
      <h4>
        <Badge bg="secondary" className="text-wrap">
          {album.title}
        </Badge>
      </h4>
      <ImageGallery album={album.path} />
    </ListGroup.Item>
  );
});

export default AlbumItem;
