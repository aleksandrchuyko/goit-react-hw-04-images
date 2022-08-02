import { useState, useEffect, useRef } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { Box } from 'components/Box';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getImagesByDescription } from 'services/api';
import { Status } from 'constants';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGallery = ({ description }) => {
  const [status, setStatus] = useState(Status.IDLE);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);
  const [error, setError] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState('');

  const query = useRef('');

  useEffect(() => {
    if (!description.trim()) {
      return;
    }
    query.current = description;
    setImages([]);
    setPage(1);
  }, [description]);

  useEffect(() => {
    if (query.current) {
      setStatus(Status.PENDING);
      getImagesByDescription(query.current, page)
        .then(result => {
          setImages(state => [...state, ...result.data.hits]);
          setStatus(Status.RESOLVED);
        })
        .catch(err => {
          setError(err.message);
          setStatus(Status.REJECTED);
        });
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage(state => state + 1);
  };

  const handleImageTileClick = (isShowModal, modalImgUrl) => {
    setIsShowModal(isShowModal);
    setModalImgUrl(modalImgUrl);
  };

  const toggleModal = () => {
    setIsShowModal(state => !state);
  };

  return (
    <Box display="flex" flexDirection="column">
      {status === Status.IDLE && (
        <p>Введите ключевое слово для поиска картинки...</p>
      )}
      {images && (
        <GalleryList>
          {images.map(image => (
            <li key={image.id}>
              <ImageGalleryItem
                id={image.id}
                miniImg={image.webformatURL}
                largeImg={image.largeImageURL}
                onTileClick={handleImageTileClick}
              />
            </li>
          ))}
        </GalleryList>
      )}
      {status === Status.PENDING && <Loader />}

      {isShowModal && <Modal src={modalImgUrl} onClose={toggleModal} />}
      {status === Status.RESOLVED && <Button onButtonClick={handleLoadMore} />}
      {status === Status.REJECTED && <p>{error}</p>}
    </Box>
  );
};

ImageGallery.propTypes = {
  description: PropTypes.string.isRequired,
};
