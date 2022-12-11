import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    hits: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.request !== this.props.request) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.request}&page=1&key=7759209-af26fbf7f42c83ac7a267ccb1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(hits => this.setState({ hits }));
    }
  }
  render() {
    return <ul className="gallery"></ul>;
  }
}
