import React from 'react';

const ScrapbookImage = ({src, style, about}) => {
  return(
    <img className="scrapbook-image" src={src} alt={about} style={style} title={about} />
  );
}

export default ScrapbookImage;
