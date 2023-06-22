import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import apiImage from '../service/ServiceGallery';

export default class ImageGallery extends Component {
  state = {
    imageArr: [],
    status: 'idle',
    error: ''
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps !== this.props.nameImage) {

    apiImage
    .FetchImage(this.props.nameImage)
        .then(imageArr => {
            if (imageArr.hits.length > 0) {
               this.setState({imageArr: imageArr.hits, status: 'resolved'})
            }
        })
        .catch(error => this.setState({ error: error.message, status: 'rejected' }));
    }
  }

  render() {
    if (this.state.status === 'resolved') {
      return (
        <ul className="gallery">
          <ImageGalleryItem imageAPI = {this.state.imageArr}/>
        </ul>
      );
    };

    if (this.state.status === 'rejected') {
        return alert('no content')
    }
  }
}
