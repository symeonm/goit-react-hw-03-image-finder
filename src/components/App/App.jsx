import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Component } from 'react';
// import  LoadMore  from "../Button/Button";
import {AppStyle} from './AppStyledComponent';

export default class App extends Component {
  state = {
    nameImage: '',
    imageArr: []
  };

  handleSearch = ({ name }) => {
    this.setState({ nameImage: name });
  };

 

  handleTotalHits = ({totalHits, imageArr, status}) => {

    this.setState(prev=>({
      totalHits, imageArr: [...prev.imageArr, ...imageArr], status: status
      // loadMore: this.state.page < Math.ceil(totalHits / this.state.page),
    }));
  };

  render() {

    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          nameImage={this.state.nameImage}
          handleTotalHits={this.handleTotalHits}
        />
      </AppStyle>
    );
  }
}




