import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { FaUser } from "react-icons/fa";

import './Nav.css'

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const logOut = () => {
    signOut(auth);
  }
 
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <p id='brand'>Healthy Piorr</p>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
      </ul>

      {
        user?.email ? <div className="dropdown">
        <span className="dropdown-toggle user-icon" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <FaUser></FaUser>
        </span>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className='text-center my-2'>
              <img className='w-25 rounded-circle' src={user.photoURL} alt="" />
            </li>
          
          <li className='text-center'>{user.displayName}</li>
          <li className='text-center'>
            <button onClick={logOut} className='btn text-danger log-out'>Log Out</button>
          </li>
        </ul>
      </div>

        :
        <Link to='/login' className="nav-link">
        Login/Register
        </Link>
      }

      


      </div>
    </div>
      </nav>  
    );
};

export default Nav;