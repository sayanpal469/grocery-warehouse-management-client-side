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
                <div className='w-50 mx-auto'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates aliquid iste impedit commodi amet nesciunt, nemo corporis facere aut ex repellat veritatis reiciendis obcaecati? Consequuntur deserunt ducimus quidem recusandae molestias accusantium at ratione possimus ipsa rerum nemo laboriosam beatae et alias, cum pariatur itaque dolor, distinctio autem, dicta quis!</p>
                </div>

            </div>
        </div>
    );
};

export default FooterBanner;