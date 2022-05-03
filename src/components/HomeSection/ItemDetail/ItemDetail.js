import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetail.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const ItemDetail = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const navigate = useNavigate()

    useEffect( () => {
        const url = `http://localhost:5000/product/${itemId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[item])


        const itemQuantity = item.quantity
        //console.log(parseInt(quantity));

        const handelDeleverQuantity = () => {
            const newQuantity = parseInt(itemQuantity) - 1
            //console.log(newQuantity);

            const deleverQuantity = {newQuantity}

            const url = `http://localhost:5000/product/${itemId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(deleverQuantity)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    alert('Delevered')
                })
            }

        const handelAddQuantity = (e) => {
        e.preventDefault()

        const addQuantity = e.target.addQuantity.value
        //console.log(parseInt(addQuantity));
        const newQuantity = parseInt(itemQuantity) + parseInt(addQuantity)
        //console.log(newQuantity);

        const updateQuantity = {newQuantity}
        
        const url = `http://localhost:5000/product/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
            })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('quantity added')
                e.target.reset()
            })

    }
    return (
        <div className='detail-area my-5'>
            <div className='container'>
            <div className='row py-5 align-items-center'>
            <Fade left>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h5>Supplied by- {item.supplierName}.</h5>
                <h2>{item.price}</h2>
                <h2>{item.quantity}kg</h2>
                <div className='w-25 text-center mt-2'>
                <button onClick={handelDeleverQuantity} className='btn btn-success'>Delever?</button>
                    <h2 className='my-2'>&</h2>
                <form onSubmit={handelAddQuantity} action="#">
                    <input className='rounded-pill px-3' name='addQuantity' type="number" /> <br />
                    <input className='btn mt-2 btn-success' type="submit"  value='Add Quantity'/>
                </form>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <img className='rounded-circle' src={item.image} alt="" />
            </div>
            </Fade>
            </div>
            <div className='text-center'>
                <Zoom bottom>
                <button onClick={() => navigate('/manage')} className='btn btn-primary'>Manage Item</button>
                </Zoom>
                <br />
                <Zoom bottom>
                <button onClick={() => navigate('/home')} className='btn btn-primary my-3'>Back to home</button>
                </Zoom>
            </div>

            </div>
            
        </div>
    );
};

export default ItemDetail;