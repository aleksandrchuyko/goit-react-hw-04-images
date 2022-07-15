import { ImageTile } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ miniImg, largeImg, onTileClick }) => {
  const handleTileClick = () => {
    onTileClick(true, largeImg);
  };

  return <ImageTile src={miniImg} alt="Something" onClick={handleTileClick} />;
};

ImageGalleryItem.propTypes = {
  miniImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onTileClick: PropTypes.func.isRequired,
};
