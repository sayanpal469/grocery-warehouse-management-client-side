import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

const Nav = () => {
 
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  <div className="container">
    <Link className="navbar-brand text-danger" to="#">
    Healthy Piorr
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
      </ul>
      <span className="navbar-text">
        Login/Register
      </span>
    </div>
  </div>
      </nav>  
    );
};

export default Nav;