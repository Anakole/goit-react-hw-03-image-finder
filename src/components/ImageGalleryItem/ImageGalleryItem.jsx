import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <GalleryItem>
        <GalleryImg src={webformatURL} alt={tags} onClick={this.modalToggle} />
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={this.modalToggle}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
