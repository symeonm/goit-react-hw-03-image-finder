import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Component } from 'react';
import  LoadMore  from "../Button/Button";

export default class App extends Component {
  state = {
    nameImage: '',
    page: 1,
    imageArr: [],
    loadMore: false,
    totalHits: ''
  };

  handleSearch = ({ name }) => {
    this.setState({ nameImage: name, page: 1 });
  };

  countPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleTotalHits = ({totalHits, hits}) => {

    this.setState(prev=>({
      totalHits, imageArr: [...prev.imageArr, ...hits]
      // loadMore: this.state.page < Math.ceil(totalHits / this.state.page),
    }));
  };

  render() {
    const { imageArr, totalHits } = this.state;
console.log(imageArr);
console.log(totalHits);
    const hasMore = imageArr.length < totalHits && imageArr.length > 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          nameImage={this.state.nameImage}
          page={this.state.page}
          countPage={this.countPage}
          handleTotalHits={this.handleTotalHits}
        />
        
        {hasMore && <LoadMore addImage={this.countPage}></LoadMore>}
      </div>
    );
  }
}
