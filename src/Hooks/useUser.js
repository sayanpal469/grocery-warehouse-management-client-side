import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUser = () => {
    const [user] = useAuthState(auth)

    const[userItems, setUserItems] = useState([])

    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/userProduct?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUserItems(data))
    },[user?.email, userItems])
    return [userItems, setUserItems]
};

export default useUser;