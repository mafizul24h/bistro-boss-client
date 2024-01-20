import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menus] = useMenu();
    const populars = menus.filter(menu => menu.category === 'popular')
    // const [menus, setMenus] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenus(popularItems);
    //         })
    // }, []);

    return (
        <div className='mb-16 mx-8'>
            <SectionTitle subHeading={'Check it out'} heading={'From Our Menu'} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    populars.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className='text-center'>
                <Link to={'/menu'}><button className='btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-600 mt-8'>Popular Menu</button></Link>
            </div>
        </div>
    );
};

export default PopularMenu;