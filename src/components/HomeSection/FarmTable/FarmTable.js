import React from 'react';
import Famers from '../../../asset/famers.png'
import Warehouse from '../../../asset/warehouse.png'
import Partner from '../../../asset/partner.png'
import Consumer from '../../../asset/consumer.png'


const FarmTable = () => {
    return (
        <div className='container my-5'>
            <h5 className='text-center text-danger fw-bold'>Our Commitment</h5>
            <h1 className='text-center fw-bold my-5'>Farm to table in 16 Hours with freshness</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="card mb-3 p-2 bg-success" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={Famers} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body text-white">
                            <h5 class="card-title">Famers</h5>
                            <p class="card-text">we procure from local farmers, Harvest as per Demann.</p>
                            <p class="card-text"><small class="text-muted">6 Hours</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="card mb-3 p-2 bg-warning" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={Warehouse} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body text-white">
                            <h5 class="card-title">Warehouse</h5>
                            <p class="card-text">Sorting, Grading, Packing done overnight.</p>
                            <p class="card-text"><small class="text-muted">6 Hours</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="card mb-3 p-2 bg-secondary" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={Partner} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body text-white">
                            <h5 class="card-title">Partner</h5>
                            <p class="card-text">Deliver to community agents to next day by 7AM</p>
                            <p class="card-text"><small class="text-muted">4 Hours</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="card mb-3 p-2 bg-danger" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={Consumer} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body text-white">
                            <h5 class="card-title">Consumer</h5>
                            <p class="card-text">Fresh fruits and vegetables are delivered to your doorstep.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmTable;