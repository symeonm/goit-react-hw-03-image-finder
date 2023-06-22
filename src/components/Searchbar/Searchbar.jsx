import { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state);
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
