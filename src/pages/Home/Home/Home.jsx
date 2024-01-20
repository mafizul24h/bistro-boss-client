import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import BistroInto from '../BistroInto/BistroInto';
import CallUs from '../../../components/CallUs/CallUs';
import ChefRecommen from '../ChefRecommen/ChefRecommen';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BistroInto />
            <PopularMenu />
            <CallUs />
            <ChefRecommen />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;