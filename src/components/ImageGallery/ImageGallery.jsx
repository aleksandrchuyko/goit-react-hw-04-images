import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { Box } from 'components/Box';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getImagesByDescription } from 'services/pixabay-api';
import { Status } from 'constants';
import { Modal } from 'components/Modal/Modal';

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
      this.setState({ status: Status.PENDING });
      getImagesByDescription(this.props.description, this.state.page)
        .then(result => {
          // console.log(result);
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

    if (status === Status.IDLE) {
      return (
        <Box display="flex" flexDirection="column">
          <p>Введите ключевое слово для поиска картинки...</p>
        </Box>
      );
    }
    if (status === Status.PENDING) {
      return <Loader></Loader>;
    }
    if (status === Status.RESOLVED) {
      return (
        <Box display="flex" flexDirection="column">
          <GalleryList>
            {images.map(image => (
              <li key={image.id}>
                <ImageGalleryItem
                  id={image.id}
                  miniImg={image.webformatURL}
                  largeImg={image.largeImageURL}
                  onTileClick={this.handleImageTileClick}
                ></ImageGalleryItem>
              </li>
            ))}
          </GalleryList>
          <Button onButtonClick={this.handleLoadMore}></Button>
          {isShowModal && (
            <Modal src={modalImgUrl} onClose={this.toggleModal}></Modal>
          )}
        </Box>
      );
    }
    if (status === Status.REJECTED) {
      return (
        <Box display="flex" flexDirection="column">
          <p>{error}</p>
        </Box>
      );
    }
  }
}
