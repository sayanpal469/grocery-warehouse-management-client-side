import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name, image, quantity, description, price, supplierName} = item

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
            <div class="card mx-auto" style={{width: '18rem', border: 'none'}}>
                <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title font-weight-bold">{name}</h5>
                <h5 class="card-title font-weight-bold">{price}</h5>
                <p class="card-title font-weight-bold">Quantity: {quantity}</p>
                <p class="card-title font-weight-bold">Supplier Name: {supplierName}</p>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
</div>            
        </div>
    );
};

export default Item;