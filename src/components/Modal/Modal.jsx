import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalSlyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseKeydown);
  }
  handleCloseKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClose}>
        <ModalSlyled>
          <img src={largeImageURL} alt={tags} />
        </ModalSlyled>
      </Backdrop>,
      modalRoot
    );
  }
}
