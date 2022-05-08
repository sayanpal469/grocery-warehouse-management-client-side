import React from 'react';
import './Banner.css'
import Bounce from 'react-reveal/Bounce';

const Banner = () => {
    return (
      <div className='banner row align-items-center'>
        <div className='col-lg-6'></div>
        <div className='col-lg-6'>
          <Bounce right>
          <h1 className='text-center heading'>Welcome To</h1>
          </Bounce>
          <Bounce right>
          <p className='text-center heading2'>Healthy Piorr</p>
          </Bounce>
          <Bounce right>
          <p className='text-center'>Revolutionizing the Fresh Produce Supply Chain</p>
          </Bounce>
        </div>
      </div>
    );
};

export default Banner;