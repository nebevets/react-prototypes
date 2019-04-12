import React, { Component } from 'react';
import './app.css';
import Scrapbook from './scrapbook';
import Modal from './modal';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      title: '',
      src: ''
    };
  }
  openModal = (title, src) => {
    this.setState({
      isOpen: true,
      title,
      src
    });
  }
  closeModal = () => {
    this.setState({
      isOpen: false
    });
  }
  stopBubbling(event){
    event.stopPropagation();
  }
  render(){
    const {isOpen, title, src} = this.state;
    return (
      <div className="main-container">
        <h1 className="main-title">Scrapbook</h1>
        <Scrapbook open={this.openModal} />
        {
         (isOpen)
            ? <Modal close={this.closeModal} bubble={this.stopBubbling} title={title} src={src} />
            : null
        }
      </div>
    );
  }
}

export default App;
