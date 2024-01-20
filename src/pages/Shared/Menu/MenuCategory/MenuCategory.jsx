import React from 'react';
import MenuItem from '../../MenuItem/MenuItem';
import Cover from '../../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className='my-16'>
            {title && <Cover image={coverImg} title={title} />}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mx-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            {
                title && <div className='text-center'>
                    <Link to={`/order/${title}`}>
                        <button className='btn btn-outline border-0 border-b-4 mt-8'>Order Now</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default MenuCategory;