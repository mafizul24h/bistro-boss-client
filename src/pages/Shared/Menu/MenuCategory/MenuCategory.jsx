import React from 'react';
import MenuItem from '../../MenuItem/MenuItem';
import Cover from '../../Cover/Cover';

const MenuCategory = ({items, coverImg, title}) => {
    return (
        <div className='my-16'>
            {title && <Cover image={coverImg} title={title} />}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;