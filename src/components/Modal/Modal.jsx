import { Overlay, ImageViewer } from './Modal.styled';

export const Modal = ({ src, onClose }) => {
  const handleCloseClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleCloseClick}>
      <ImageViewer>
        <img src={src} alt="Something" />
      </ImageViewer>
    </Overlay>
  );
};
