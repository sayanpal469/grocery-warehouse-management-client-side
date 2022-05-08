import React from 'react';
import AppSection from '../AppSection/AppSection';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExtraSection from '../ExtraSection/ExtraSection';
import FarmTable from '../FarmTable/FarmTable';
import FooterBanner from '../FooterBanner/FooterBanner';
import Items from '../Items/Items';
import Partner from '../Partner/Partner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ExtraSection/>
            <Items/>
            <AppSection/>
            <Partner/>
            <FarmTable/>
            <Contact/>
            <FooterBanner/>
        </div>
    );
};

export default Home;