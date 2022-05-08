import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const AppSection = () => {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <Fade left>
                    <img className='w-75' src="https://i.ibb.co/1QNkKD2/mobiles.png" alt="" />
                    </Fade>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <Bounce right>
                    <h6 className='fw-bold text-danger mb-4'>Mobile App</h6>
                    </Bounce>
                    <Bounce right>
                    <h1>Download the app</h1>
                    </Bounce>
                    <Bounce right>
                    <p>Now order Farm Fresh Fruits and Vegetables at your fingertips. Download the free Healthify app available on Android and iOS.</p>
                    </Bounce>
                    <Bounce right>
                    <h5>Download the app and get Special Discounts</h5>
                    </Bounce>
                    <div className='d-flex mt-4'>
                        <Bounce right>
                        <img className='me-3' src="https://i.ibb.co/0XngcTt/google.png" alt="" />
                        </Bounce>
                        <Bounce right>
                        <img src="https://i.ibb.co/ZJ3T2sH/iphone.png" alt="" />
                        </Bounce>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default AppSection;