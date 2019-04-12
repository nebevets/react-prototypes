import React from 'react';
import './scrapbook.css';
import saville from '../images/saville_waste.jpg'

const Scrapbook = () => {
  return(
    <div className="scrapbook-container">
      <img src={saville} alt="saville" />
    </div>
  );
}

export default Scrapbook;
