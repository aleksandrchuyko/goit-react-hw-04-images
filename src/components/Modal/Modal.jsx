import { useEffect } from 'react';
import { Overlay, ImageViewer } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ src, onClose }) => {
  useEffect(() => {
    const handleKeyEsc = e => {
      console.log('handle');
      if (e.code === 'Escape') {
        console.log(e.code);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyEsc);
    return () => {
      window.removeEventListener('keydown', handleKeyEsc);
    };
  }, [onClose]);

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

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
