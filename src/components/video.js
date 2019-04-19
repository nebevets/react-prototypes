import React from 'react';
import './video.css';

const Video = ({href, type, closeVideo}) => {
  return(
    <div className="previewVideo" onClick={closeVideo}>
      <video controls autoPlay>
        <source src={href} type={type} />
      </video>
    </div>
  );
}

export default Video;
