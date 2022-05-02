import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})

    useEffect( () => {
        const url = `http://localhost:5000/product/${itemId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div>
            <img src={item.image} alt="" />
        </div>
    );
};

export default ItemDetail;