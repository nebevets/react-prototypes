import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_image';

const Scrapbook = () => {
  const images = imageData.map( (item, index) => {
    return(
      <ScrapbookImage src={item.src} key={index} />
    );
  });
  return(
    <div className="scrapbook-container">
      {images}
    </div>
  );
}

export default Scrapbook;
