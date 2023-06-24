import {
  ImageGalleryItemSt,
  ImageGalleryItemImage,
} from './ImageGalleryItemStyled';

import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  // console.log(clickImage);


 

  render() {
    const { imageArr } = this.props.ImageState;
    
    return imageArr.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItemSt
        className="gallery-item"
        key={id}
        onClick={() => this.props.clickImage(largeImageURL)}
      >
        <ImageGalleryItemImage src={webformatURL} alt={webformatURL} />
      </ImageGalleryItemSt>
    ));
  }
}
