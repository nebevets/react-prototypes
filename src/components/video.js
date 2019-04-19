import React, { Component } from 'react';
import './video.css';

class Video extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {href, type, closeVideo} = this.props;
    return(
      <div className="previewVideo" onClick={closeVideo}>
        <video controls autoPlay>
          <source src={href} type={type} />
        </video>
      </div>
    );
  }
}

export default Video;
