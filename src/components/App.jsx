import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    request: '',
  };

  handleFormSubmit = request => {
    console.log(request);
    this.setState({ request });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery request={this.state.request} />
      </>
    );
  }
}
