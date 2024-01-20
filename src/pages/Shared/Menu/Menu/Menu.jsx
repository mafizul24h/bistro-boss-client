import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import img from './../../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover image={img} title={'Our Menu'} description={'Would you like to try Dish'} />
            <h2>All Menu Here</h2>
        </div>
    );
};

export default Menu;