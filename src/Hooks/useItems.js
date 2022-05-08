import React, { useEffect, useState } from 'react';

const useItems = (number) => {
    const [items, setItems] = useState([])

    useEffect( () => {
        fetch(`https://nameless-reef-88992.herokuapp.com/product`)
        .then(res => res.json())
        .then(data => {
            const products = data.slice(0,number)
            setItems(products)
        })
    },[items])

    
    return [items, setItems]
};

export default useItems;