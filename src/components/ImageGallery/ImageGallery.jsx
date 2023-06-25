import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import apiImage from '../service/ServiceGallery';
import { ImageList } from './ImageGalleryStyled';

import Loader from '../Loader/';
import Modal from '../Modal';

export default class ImageGallery extends Component {
  state = {
    imageArr: [],
    status: 'idle',
    error: '',
    modalImage: '',
    totalHits: '',
  };

  componentDidUpdate(prevProps, _) {
    if (
      prevProps.nameImage !== this.props.nameImage ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ status: 'pending' });

      if (prevProps.nameImage !== this.props.nameImage) {
        this.setState({ imageArr: [] });
      }

      apiImage(this.props.nameImage, this.props.page)
        .then(data => {
          if (data.hits.length === 0 || this.props.nameImage === '') {
            this.setState({ imageArr: [], status: 'idle' });
            console.log(
              `Зображень за запитом: ${this.props.nameImage} не існує`
            );
          } else {
            this.setState(prev => ({
              imageArr: [...prev.imageArr, ...data.hits],
              status: 'resolved',
              totalHits: data.totalHits,
            }));
            this.props.handleTotalHits(data);
          }
        })
        .catch(error =>
          this.setState({ error: error.message, status: 'rejected' })
        );
    }
  }

  clickImage = img => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImage: img,
    }));
  };

  render() {
    if (this.state.status === 'resolved') {
      return (
        <ImageList className="gallery">
          <ImageGalleryItem
            ImageState={this.state}
            clickImage={this.clickImage}
          />
          {this.state.showModal && (
            <Modal onClose={this.clickImage}>
              <img
                src={this.state.modalImage}
                alt={this.state.modalImage}
              ></img>
            </Modal>
          )}
        </ImageList>
      );
    }

    if (this.state.status === 'rejected') {
      return alert('ERR SERVER');
    }

    if (this.state.status === 'pending') {
      return <Loader />;
    }
  }
}
