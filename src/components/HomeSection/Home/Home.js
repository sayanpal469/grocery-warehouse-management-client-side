import React from 'react';
import AppSection from '../AppSection/AppSection';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ExtraSection/>
            <Items/>
            <AppSection/>
        </div>
    );
};

export default Home;