// src/components/imageGallery.js
import React from "react";
import { withAlbumData } from '../components/withAlbumData';
import Gallery from "@browniebroke/gatsby-image-gallery";

const ImageGallery = ({ data }) => {
  // Convert your data to the format required by gatsby-image-gallery
  const images = data.map(({ node }) => ({
    ...node.childImageSharp,
  }));

  return (
      <Gallery images={images} gutter={"0.1rem"} mdColWidth={25}/>
  );
};

export default withAlbumData(ImageGallery);