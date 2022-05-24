import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummary/>
            <Brands/>
        </div>
    );
};

export default Home;