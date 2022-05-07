import React from 'react';
import './ExtraSection.css'
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineThumbUp } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

const ExtraSection = () => {
    return (
        <div className="container my-5">
            <div className='row border py-3'>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className='box d-flex justify-content-between align-items-center p-3'>
                    <div>
                        <FaShippingFast className='rIcon'></FaShippingFast>
                    </div>
                    <div className='extraPara'>
                        <h5>FREE SHIPPING & RETURN</h5>
                        <p>Free shippnig on order over $99</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className='box d-flex justify-content-between align-items-center  p-3'>
                    <div>
                        <HiOutlineThumbUp className='rIcon'></HiOutlineThumbUp>
                    </div>
                    <div className='extraPara'>
                        <h5>QUANTITY GUARANTEED</h5>
                        <p>We offer high quality of products</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className='d-flex justify-content-between align-items-center p-3'>
                    <div>
                        <MdPayment className='rIcon'></MdPayment>
                    </div>
                    <div className='extraPara'>
                        <h5>SECURE PAYMENT</h5>
                        <p>We ensure secure payment</p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default ExtraSection;