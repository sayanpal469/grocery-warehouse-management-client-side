import React from 'react';
import Partner1 from '../../../asset/partner1.png'
import Partner2 from '../../../asset/partner2.png'
import PartnerHand from '../../../asset/partnerhand.png'
import Income from '../../../asset/income.png'
import Invest from '../../../asset/invest.png'
import Fresh from '../../../asset/fresh.png'

const Partner = () => {
    return (
        <div className='container my-5'>
            <div className="row text-center">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img className='w-100' src={Partner1} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                   <h2 className='fw-bold'>Became A Partner & Earn</h2>
                   <h4 className='text-info my-3'>Rs 50,000/Per Month</h4>
                   <p>Or more without any investment</p>
                   <button className='btn btn-success px-5'>Join us now!</button>
                   <img className='w-100' src={PartnerHand} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img className='w-100' src={Partner2} alt="" />
                </div>
            </div>

            <div className="row my-5 text-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={Income} alt="" />
                    <p>Guaranteed Income</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={Invest} alt="" />
                    <p>No Investment Needed</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={Fresh} alt="" />
                    <p>Serve Fresh Vegetables and <br /> Groceries in your community</p>
                </div>
                
            </div>
        </div>
    );
};

export default Partner;