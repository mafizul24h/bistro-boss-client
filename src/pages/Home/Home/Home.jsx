import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import BistroInto from '../BistroInto/BistroInto';
import CallUs from '../../../components/CallUs/CallUs';
import ChefRecommen from '../ChefRecommen/ChefRecommen';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
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