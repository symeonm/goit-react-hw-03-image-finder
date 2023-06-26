import {
  ImageGalleryItemSt,
  ImageGalleryItemImage,
} from './ImageGalleryItemStyled';

import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  // console.log(clickImage);

  render() {
    const { webformatURL, largeImageURL, clickImage } = this.props;

    return (
      <ImageGalleryItemSt
        className="gallery-item"
        onClick={() => clickImage(largeImageURL)}
      >
        <ImageGalleryItemImage src={webformatURL} alt={webformatURL} />
      </ImageGalleryItemSt>
    );
  }
}
