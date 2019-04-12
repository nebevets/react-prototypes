import React from 'react';

const ScrapbookImage = ({src, alt}) => {
  return(
    <img className="scrapbook-image" src={src} alt={alt} />
  );
}

export default ScrapbookImage;
