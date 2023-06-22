import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Component } from 'react';

export default class App extends Component {
  state = {
    nameImage: '',
  };

  valueSearch = ({ name }) => {
    this.setState({ nameImage: name });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.valueSearch} />
        <ImageGallery nameImage={this.state.nameImage} />
      </div>
    );
  }
}
