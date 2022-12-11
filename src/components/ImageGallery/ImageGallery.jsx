export const ImageGallery = ({ query, images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL }) => (
        <li className="gallery-item" key={id}>
          <img src={webformatURL} alt={query} />
        </li>
      ))}
    </ul>
  );
};
