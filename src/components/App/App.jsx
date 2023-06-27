import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Component } from 'react';
// import  LoadMore  from "../Button/Button";
import { AppStyle } from './AppStyledComponent';

export default class App extends Component {
  state = {
    nameImage: '',
    imageArr: [],
    page: 1,
  };

  handleSearch = ({ name }) => {
    this.setState({ nameImage: name });
  };

  // handleTotalHits = () => {
  //   this.setState({ imageArr: [], page: 1 });
  // };

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          nameImage={this.state.nameImage}
          pageProp={this.state.page}
          // handleTotalHits={this.handleTotalHits}
        />
      </AppStyle>
    );
  }
}
