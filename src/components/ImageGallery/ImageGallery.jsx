import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { Box } from 'components/Box';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { getImagesByDescription } from 'services/pixabay-api';
import { Status } from 'constants';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: '',
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.description !== this.props.description) {
      getImagesByDescription(this.props.description)
        .then(result => {
          // console.log(result);
          this.setState({
            status: Status.RESOLVED,
            images: result.data.hits,
          });
        })
        .catch(error => {
          this.setState({
            images: [],
            error,
            status: Status.REJECTED,
          });
          console.log(error);
        });
    }
  }

  render() {
    const { images } = this.state;

    return (
      <Box display="flex" flexDirection ="column">
        <GalleryList>
          {images.map(image => (
            <li key={image.id}>
              <ImageGalleryItem
                id={image.id}
                miniImg={image.webformatURL}
                largeImg={image.largeImageURL}
              ></ImageGalleryItem>
            </li>
          ))}
        </GalleryList>
        <Button></Button>
      </Box>
    );
  }
}
