import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Component } from 'react';


export default class App extends Component {
  state = {
    nameImage: '',
    page: 1,
  };

  handleSearch = ({ name }) => {
    this.setState({ nameImage: name, page: 1 });
  };

  countPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery nameImage={this.state.nameImage}  page={this.state.page} countPage={this.countPage}/>
      
      </div>
    );
  }
}
