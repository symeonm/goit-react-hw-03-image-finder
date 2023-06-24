import { Component } from 'react';
import { Overlay, ModalViev } from './ModalStyled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  state={
    showModal: true
  }

  componentDidMount(){
    window.addEventListener('keydown',  this.handleKeyDown)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown',  this.handleKeyDown)
  }
   
   

  handleKeyDown=(e)=>{
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  hendleBackdrop=(e)=>{
    if (e.target === e.currentTarget) {
      this.props.onClose()
    }
  }

  

  render() {
    return createPortal(
      <Overlay onClick={this.hendleBackdrop}>
        <ModalViev>{this.props.children}</ModalViev>
      </Overlay>,
      modalRoot
    );
  }
}
