import React from "react";
import ImageGallery from "../components/imageGallery";
import ListGroup from "react-bootstrap/ListGroup";

const AlbumItem = React.forwardRef(({ album }, ref) => {
  return (
    <ListGroup.Item ref={ref}>
      <h5>
        <small className="text-muted">{album.title}</small>
      </h5>
      <ImageGallery album={album.path} />
    </ListGroup.Item>
  );
});

export default AlbumItem;
