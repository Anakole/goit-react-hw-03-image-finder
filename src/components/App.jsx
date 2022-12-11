import { Component } from 'react';
import * as API from 'services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      console.log(prevState);
      this.addImages();
    }
  }

  addImages = async (query, page) => {
    try {
      const images = await API.addImages(query, page);
      this.setState(prevState => ({
        query,
        page: 1,
        images: [...prevState.images, ...images.hits],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { query, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.addImages} />
        <ImageGallery query={query} images={images} />
      </>
    );
  }
}
