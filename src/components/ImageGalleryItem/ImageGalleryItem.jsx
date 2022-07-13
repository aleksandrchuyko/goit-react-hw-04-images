import { ImageTile } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, miniImg, largeImg, onTileClick }) => {
  const handleTileClick = () => {
    // console.log('modal show');
    onTileClick(true, largeImg);
  };

  return <ImageTile src={miniImg} alt="Something" onClick={handleTileClick} />;
};
