import React from 'react';

const AppSection = () => {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img className='w-75' src="https://i.ibb.co/1QNkKD2/mobiles.png" alt="" />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h6 className='fw-bold text-danger mb-4'>Mobile App</h6>
                    <h1>Download the app</h1>
                    <p>Now order Farm Fresh Fruits and Vegetables at your fingertips. Download the free Healthify app available on Android and iOS.</p>
                    <h5>Download the app and get Special Discounts</h5>
                    <div className='d-flex mt-4'>
                        <img className='me-3' src="https://i.ibb.co/0XngcTt/google.png" alt="" />
                        <img src="https://i.ibb.co/ZJ3T2sH/iphone.png" alt="" />
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default AppSection;