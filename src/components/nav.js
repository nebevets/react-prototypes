import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return(
    <ul className="nav nav-tabs mt-3">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" exact activeClassName="active selected" >Welcome</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/our_macarons" className="nav-link" exact activeClassName="active selected" >Our Macarons</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/gifts_parties" className="nav-link" exact activeClassName="active selected" >Gifts Parties</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link" exact activeClassName="active selected" >Contact</NavLink>
      </li>
    </ul>
  );
}

export default Nav;
