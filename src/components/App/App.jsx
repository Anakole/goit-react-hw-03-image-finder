import { Component } from 'react';
import * as API from 'services/Api';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Searchbar } from '../Searchbar/Searchbar';
import { Container, Message } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    total: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      this.addImages(query, page);
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  addImages = async (query, page) => {
    try {
      const images = await API.addImages(query, page);
      this.setState(prevState => ({
        query,
        page,
        images: [...prevState.images, ...images.hits],
        total: images.total,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { query, images, isLoading, total } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {total === 0 && (
          <Message>Oops, nothing was found for "{query}".</Message>
        )}
        <ImageGallery query={query} images={images} />
        {images.length >= 12 && <Button onClick={this.loadMore} />}
      </Container>
    );
  }
}
