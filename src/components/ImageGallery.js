// src/components/ImageGallery.js
import React from "react";
import { withAlbumData } from './withAlbumData';
import Gallery from "@browniebroke/gatsby-image-gallery";
import './ImageGallery.css';

const ImageGallery = ({ data }) => {
  // Convert your data to the format required by gatsby-image-gallery
  const images = data.map(({ node }) => ({
    ...node.childImageSharp,
  }));

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default withAlbumData(ImageGallery);