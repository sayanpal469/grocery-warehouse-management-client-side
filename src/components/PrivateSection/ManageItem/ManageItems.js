import React from 'react';
import useItems from '../../../Hooks/useItems';
import ManageItem from './ManageItem';

const ManageItems = () => {
    const [items, setItems] = useItems()


    return (
        <div className='container text-center'>
            <button className='btn btn-primary my-5'>Add Item</button>
            <div className='row'>
                {
                    items.map(item => <ManageItem key={item._id} item={item}></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;