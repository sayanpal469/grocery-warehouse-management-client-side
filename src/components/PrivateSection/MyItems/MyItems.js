import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])

    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/userProduct?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    },[user?.email])
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