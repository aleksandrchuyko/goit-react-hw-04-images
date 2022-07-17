import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { Box } from 'components/Box';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getImagesByDescription } from 'services/api';
import { Status } from 'constants';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    status: Status.IDLE,
    images: [],
    page: 1,
    error: '',
    isShowModal: false,
    modalImgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const isNewSearch = prevProps.description !== this.props.description;
    const isNewPage = prevState.page < this.state.page;
    if (isNewSearch || isNewPage) {
      if (isNewSearch) {
        this.setState({ images: [] });
      }
      this.setState({ status: Status.PENDING });
      getImagesByDescription(this.props.description, this.state.page)
        .then(result => {
          const newImages = isNewPage
            ? [...prevState.images, ...result.data.hits]
            : [...result.data.hits];
          this.setState(prevState => ({
            status: Status.RESOLVED,
            images: newImages,
          }));
        })
        .catch(error => {
          this.setState({
            error,
            status: Status.REJECTED,
          });
          console.log(error);
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageTileClick = (isShowModal, modalImgUrl) => {
    this.setState({
      isShowModal,
      modalImgUrl,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isShowModal: !prevState.isShowModal }));
  };

  render() {
    const { images, status, error, isShowModal, modalImgUrl } = this.state;

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
                  onTileClick={this.handleImageTileClick}
                />
              </li>
            ))}
          </GalleryList>
        )}
        {status === Status.PENDING && <Loader />}

        {isShowModal && <Modal src={modalImgUrl} onClose={this.toggleModal} />}
        {status === Status.RESOLVED && (
          <Button onButtonClick={this.handleLoadMore} />
        )}
        {status === Status.REJECTED && (<p>{error}</p>)}
      </Box>
    );
  }
}

ImageGallery.propTypes = {
  description: PropTypes.string.isRequired,
};
