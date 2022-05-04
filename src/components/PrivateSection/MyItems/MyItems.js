import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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
        <div>
            <h1>My Item {items.length}</h1>
        </div>
    );
};

export default MyItems;