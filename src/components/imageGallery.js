// src/components/imageGallery.js
import React from "react";
import { useAlbumData } from '../hooks/useAlbumData';
import Gallery from "@browniebroke/gatsby-image-gallery";

const ImageGallery = ({ data }) => {
  // Convert your data to the format required by gatsby-image-gallery
  const images = data.map(({ node }) => ({
    ...node.childImageSharp,
  }));

  return (
      <Gallery images={images} />
  );
};

export default useAlbumData(ImageGallery);