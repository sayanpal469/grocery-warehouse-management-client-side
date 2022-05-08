import React from 'react';
import './FooterBanner.css'
import { GiThreeLeaves } from "react-icons/gi";
import Bounce from 'react-reveal/Bounce';

const FooterBanner = () => {

    return (
        <div className='fBanner'>
            <div className='text-center'>
                <Bounce top>
                <h5 className='fp'>100% Organic Vegetable <GiThreeLeaves id='leave'></GiThreeLeaves></h5>
                </Bounce>
                <Bounce left>
                <h1 className='fw-bold mt-4 fheading'>Organic Veggies Food</h1>
                </Bounce>
                <Bounce right>
                <h1 className='fw-bold fheading'>Cook Healthy</h1>
                </Bounce>
                <div className='w-50 mx-auto'>
                    <Bounce bottom>
                    <p>Organic farming is a production system which avoids or largely excludes the use of synthetically compounded fertilizers, pesticides, growth regulators, genetically modified organisms and livestock food additive</p>
                    </Bounce>
                </div>

            </div>
        </div>
    );
};

export default FooterBanner;