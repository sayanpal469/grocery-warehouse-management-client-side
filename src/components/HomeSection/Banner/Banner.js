import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
      <div className='banner row align-items-center'>
        <div className='col-lg-6'></div>
        <div className='col-lg-6'>
          <h1 className='text-center heading'>Welcome To</h1>
          <p className='text-center heading2'>Healthy Piorr</p>
          <p className='text-center'>Revolutionizing the Fresh Produce Supply Chain</p>
        </div>
      </div>
    );
};

export default Banner;