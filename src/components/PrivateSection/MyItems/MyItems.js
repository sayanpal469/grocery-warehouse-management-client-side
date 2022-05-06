import React, { useEffect, useState } from 'react';
import useUser from '../../../Hooks/useUser';
import MyItem from './MyItem';

const MyItems = () => {
    const [items, setItems] = useUser()
    
    return (
        <div className='container my-5'>
            <div className='row'>
                {
                    items.map(item => <MyItem key={item._id} item={item}></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;