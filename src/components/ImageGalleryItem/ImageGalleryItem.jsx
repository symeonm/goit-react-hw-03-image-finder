import { ImageGalleryItemSt, ImageGalleryItemImage } from "./ImageGalleryItemStyled";


export default function ImageGalleryItem({ ImageState }) {
  // console.log(ImageState);
  const { imageArr } = ImageState;
  return imageArr.map(({ id, webformatURL }) => (
    <ImageGalleryItemSt className="gallery-item" key={id}>
      <ImageGalleryItemImage src={webformatURL} alt="" />
    </ImageGalleryItemSt>
  ));
}
