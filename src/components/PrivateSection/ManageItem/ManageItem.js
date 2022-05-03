import React from 'react';
import Zoom from 'react-reveal/Zoom';
import useItems from '../../../Hooks/useItems';


const ManageItem = ({item}) => {
    const [items, setItems] = useItems()
    //console.log(items);
    const {name, image, quantity, description, price, supplierName} = item

    const handleDelete = (id) => {
        const proceed = window.confirm(`Are You Sure You Want To Delete ${name}?`)
        if(proceed){
            const url =`http://localhost:5000/product/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    const remaining = items.filter(itemRemaining=>itemRemaining._id!== id);
                    setItems(remaining)
                }
            })
        }
    }

            

    return (
        <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <Zoom top>
            <div className="card mx-auto shadow " style={{width: '18rem', border: 'none'}}>
                <img  src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title font-weight-bold">{name}</h5>
                <h5 className="card-title font-weight-bold">{price}</h5>
                <p className="card-title font-weight-bold">Quantity: {quantity}</p>
                <p className="card-title font-weight-bold">Supplier Name: {supplierName}</p>
                <p className="card-text">{description}</p>
                <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
            </Zoom>            
        </div>
    );
};

export default ManageItem;