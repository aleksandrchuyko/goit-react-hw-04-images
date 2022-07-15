import { Component } from 'react';
import { Overlay, ImageViewer } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleCloseClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleCloseClick}>
        <ImageViewer>
          <img src={this.props.src} alt="Something" />
        </ImageViewer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}