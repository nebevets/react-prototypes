import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <ul className="nav nav-tabs mt-3">
      <li className="nav-item">
        <Link to="/" className="nav-link">Welcome</Link>
      </li>
      <li className="nav-item">
        <Link to="/our_macarons" className="nav-link">Our Macarons</Link>
      </li>
    </ul>
  );
}

export default Nav;
