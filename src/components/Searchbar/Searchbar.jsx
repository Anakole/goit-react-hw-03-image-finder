import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = e => {
    this.setState({ request: e.target.value.toLowerCase() });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.request.trim() === '') {
      return alert('введіть запит');
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            onChange={this.handleChange}
            value={this.state.request}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
