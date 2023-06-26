import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Component } from 'react';
// import  LoadMore  from "../Button/Button";
import {AppStyle} from './AppStyledComponent';

export default class App extends Component {
  state = {
    nameImage: '',
    page: 1,
    imageArr: [],
    loadMore: false,
    totalHits: '',
    status: ''
  };

  handleSearch = ({ name }) => {
    this.setState({ nameImage: name, page: 1 });
  };

 

  handleTotalHits = ({totalHits, imageArr, status}) => {

    this.setState(prev=>({
      totalHits, imageArr: [...prev.imageArr, ...imageArr], status: status
      // loadMore: this.state.page < Math.ceil(totalHits / this.state.page),
    }));
  };

  render() {
    // const { imageArr, totalHits, status } = this.state;
    // const hasMore = imageArr.length < totalHits && imageArr.length > 0;
    // console.log(status);

    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          nameImage={this.state.nameImage}
          page={this.state.page}
          handleTotalHits={this.handleTotalHits}
        />
        
        {/* {hasMore && <LoadMore addImage={this.countPage}></LoadMore>} */}
      </AppStyle>
    );
  }
}




