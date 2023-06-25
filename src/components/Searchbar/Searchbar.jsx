import { Component } from 'react';
import { SearchBarStyle, SearchForm, SearchFormInput, SearchFormButton, SearchFormButtonLabel} from "./SearcBarStyledComponent";
export default class SearchBar extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({ name: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <SearchBarStyle className="searchbar">
        <SearchForm
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state);
          }}
        >
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarStyle>
    );
  }
}
