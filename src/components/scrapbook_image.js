import React from 'react';

const ScrapbookImage = ({src, style, about, open}) => {
  return(
    <img className="scrapbook-image" src={src} alt={about} style={style} title={about} onClick={() => open(about, src)} />
  );
}

export default ScrapbookImage;
