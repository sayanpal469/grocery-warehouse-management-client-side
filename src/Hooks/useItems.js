import React, { useEffect, useState } from 'react';

const useItems = (number) => {
    const [items, setItems] = useState([])

    useEffect( () => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => {
            const products = data.slice(0,number)
            setItems(products)
        })
    },[])

    
    return [items, setItems]
};

export default useItems;