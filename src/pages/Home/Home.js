import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummary/>
            <Parts/>
            <Brands/>
        </div>
    );
};

export default Home;