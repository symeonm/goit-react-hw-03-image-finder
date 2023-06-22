export default function ImageGalleryItem({ imageAPI }) {
  return imageAPI.map(({ id, webformatURL }) => (
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt="" />
    </li>
  ));
}
