import React from 'react';
import './FooterBanner.css'
import { GiThreeLeaves } from "react-icons/gi";

const FooterBanner = () => {

    return (
        <div className='fBanner'>
            <div className='text-center'>
                <h5 className='fp'>100% Organic Vegetable <GiThreeLeaves id='leave'></GiThreeLeaves></h5>
                <h1 className='fw-bold mt-4 fheading'>Organic Veggies Food</h1>
                <h1 className='fw-bold fheading'>Cook Healthy</h1>

            </div>
        </div>
    );
};

export default FooterBanner;