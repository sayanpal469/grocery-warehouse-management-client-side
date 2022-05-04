import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import ManageItem from './ManageItem';

const ManageItems = () => {
    const [items, setItems] = useItems()
    const navigate = useNavigate()


    return (
        <div className='container text-center'>
            <button onClick={() => navigate('/add')} className='btn btn-primary my-5'>Add Item</button>
            <div className='row'>
                {
                    items.map(item => <ManageItem key={item._id} item={item}></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;