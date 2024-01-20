import React, { useState } from 'react';
import coderImage from './../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();
    
    const salad = menus.filter(menu => menu.category === 'salad');
    const pizza = menus.filter(menu => menu.category === 'pizza');
    const soup = menus.filter(menu => menu.category === 'soup');
    const dessert = menus.filter(menu => menu.category === 'dessert');
    const drinks = menus.filter(menu => menu.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Oder Food</title>
            </Helmet>
            <Cover image={coderImage} title={'Oder Food'} />
            <div className='my-8 text-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <FoodCard items={salad}/>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={soup}/>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;