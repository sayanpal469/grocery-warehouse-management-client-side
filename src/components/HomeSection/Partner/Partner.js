import React from 'react';
import Partner1 from '../../../asset/partner1.png'
import Partner2 from '../../../asset/partner2.png'
import PartnerHand from '../../../asset/partnerhand.png'
import Income from '../../../asset/income.png'
import Invest from '../../../asset/invest.png'
import Fresh from '../../../asset/fresh.png'
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

const Partner = () => {
    return (
        <div className='container my-5'>
            <div className="row text-center">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <Rotate top left>
                    <img className='w-100' src={Partner1} alt="" />
                    </Rotate>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                    <Bounce right>
                    <h2 className='fw-bold'>Became A Partner & Earn</h2>
                    </Bounce>
                    <Bounce left>
                   <h4 className='text-primary my-3'>Rs 50,000/Per Month</h4>
                   </Bounce>
                   <Bounce right>
                   <p>Or more without any investment</p>
                   </Bounce>
                   <Bounce top>
                   <button className='btn btn-success px-5'>Join us now!</button>
                   </Bounce>
                   <Bounce bottom>
                   <img className='w-100' src={PartnerHand} alt="" />
                   </Bounce>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <Rotate top right>
                    <img className='w-100' src={Partner2} alt="" />
                </Rotate>
                </div>
            </div>

            <div className="row my-5 text-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Bounce bottom>
                    <img className='w-25' src={Income} alt="" />
                    <p>Guaranteed Income</p>
                    </Bounce>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Bounce bottom>
                    <img className='w-25' src={Invest} alt="" />
                    <p>No Investment Needed</p>
                    </Bounce>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Bounce bottom>
                    <img className='w-25' src={Fresh} alt="" />
                    <p>Serve Fresh Vegetables and <br /> Groceries in your community</p>
                    </Bounce>
                </div>
                
            </div>
        </div>
    );
};

export default Partner;