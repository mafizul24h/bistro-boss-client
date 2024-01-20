import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import img from './../../../../assets/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import dessertImg from './../../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from './../../../../assets/menu/pizza-bg.jpg'
import saladImg from './../../../../assets/menu/salad-bg.jpg'
import soupImg from './../../../../assets/menu/soup-bg.jpg'
import drinksImg from './../../../../assets/menu/drinks.jpg'

const Menu = () => {
    const [menus] = useMenu();
    const offered = menus.filter(menu => menu.category === 'offered');
    const dessert = menus.filter(menu => menu.category === 'dessert');
    const pizza = menus.filter(menu => menu.category === 'pizza');
    const salad = menus.filter(menu => menu.category === 'salad');
    const soup = menus.filter(menu => menu.category === 'soup');
    const drinks = menus.filter(menu => menu.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover image={img} title={'Our Menu'} description={'Would you like to try Dish'} />
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"} />
            <MenuCategory items={offered} />
            <MenuCategory items={dessert} coverImg={dessertImg} title={'dessert'} />
            <MenuCategory items={pizza} coverImg={pizzaImg} title={'pizza'} />
            <MenuCategory items={salad} coverImg={saladImg} title={'salad'} />
            <MenuCategory items={soup} coverImg={soupImg} title={'soup'} />
            <MenuCategory items={drinks} coverImg={drinksImg} title={'drinks'} />
        </div>
    );
};

export default Menu;