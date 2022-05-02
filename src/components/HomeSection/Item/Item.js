import React from 'react';
import './Item.css'
import Zoom from 'react-reveal/Zoom';


const Item = ({item}) => {
    const {name, image, quantity, description, price, supplierName} = item

    return (
        
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
            <Zoom top>
            <div className="card mx-auto" style={{width: '18rem', border: 'none'}}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title font-weight-bold">{name}</h5>
                <h5 className="card-title font-weight-bold">{price}</h5>
                <p className="card-title font-weight-bold">Quantity: {quantity}</p>
                <p className="card-title font-weight-bold">Supplier Name: {supplierName}</p>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </Zoom>            
        </div>
    );
};

export default Item;