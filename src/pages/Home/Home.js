import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import BusinessSummary from './BusinessSummary';
import OurTeam from './OurTeam';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <Reviews/>
            <Brands/>
            <OurTeam/>
        </div>
    );
};

export default Home;