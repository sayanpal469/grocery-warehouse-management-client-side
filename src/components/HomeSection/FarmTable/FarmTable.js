import React from 'react';
import Famers from '../../../asset/famers.png'
import Warehouse from '../../../asset/warehouse.png'
import Partner from '../../../asset/partner.png'
import Consumer from '../../../asset/consumer.png'
import Bounce from 'react-reveal/Bounce';


const FarmTable = () => {
    return (
        <div className='container my-5'>
            <Bounce top>
            <h5 className='text-center text-danger fw-bold'>Our Commitment</h5>
            </Bounce>
            <Bounce top>
            <h1 className='text-center fw-bold my-5'>Farm to table in 16 Hours with freshness</h1>
            </Bounce>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Bounce left>
                <div className="card mb-3 p-2 bg-success" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Famers} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body text-white">
                            <h5 className="card-title">Famers</h5>
                            <p className="card-text">we procure from local farmers, Harvest as per Demann.</p>
                            <p className="card-text"><small className="text-muted">6 Hours</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Bounce>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Bounce right>
                <div className="card mb-3 p-2 bg-warning" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Warehouse} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body text-white">
                            <h5 className="card-title">Warehouse</h5>
                            <p className="card-text">Sorting, Grading, Packing done overnight.</p>
                            <p className="card-text"><small className="text-muted">6 Hours</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Bounce>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Bounce left>
                <div className="card mb-3 p-2 bg-secondary" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Partner} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body text-white">
                            <h5 className="card-title">Partner</h5>
                            <p className="card-text">Deliver to community agents to next day by 7AM</p>
                            <p className="card-text"><small className="text-muted">4 Hours</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Bounce>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Bounce right>
                <div className="card mb-3 p-2 bg-danger" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Consumer} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body text-white">
                            <h5 className="card-title">Consumer</h5>
                            <p className="card-text">Fresh fruits and vegetables are delivered to your doorstep.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Bounce>
                </div>
            </div>
        </div>
    );
};

export default FarmTable;