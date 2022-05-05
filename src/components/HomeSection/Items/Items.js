import React from 'react';
import useItems from '../../../Hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems(6)

    return (
       <div className='container text-center my-5'>
           <h1>Top Products</h1>
            <div className='row'>
            {
                items.map(item => <Item item={item}></Item>)
            }
            </div>
       </div>
    );
};

export default Items;