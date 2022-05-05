import React from 'react';

const MyItem = ({item}) => {
    const {name, image, quantity, description, price, supplierName} = item
    return (
        <div>
            <div className='col-lg-12 col-md-12 col-sm-12 mt-3'>
            <div class="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{name}</h3>
                        <h5 class="card-title">{price}</h5>
                        <h5 class="card-title">Quantity:{quantity}kg</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">Supplied by- {supplierName}</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyItem;