import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
//import './NavEvent'

const Nav = () => {
    const containerRef = useRef('')
    
    const handelToggle = () => {
        containerRef.classList.toggle('active')
        }
    

    return (
        <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link to="home">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Category</Link></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="#">Testimonial</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            <h1 class="logo">Grocery</h1>
        </div>
    </nav>
    );
};

export default Nav;