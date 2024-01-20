import React from 'react';

const MenuItem = ({item}) => {
    const {_id, name, recipe, image, price} = item;
    // console.log(item);

    return (
        <div className='flex space-x-6'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[90px]' src={image} alt={name} />
            <div>
                <h4 className='uppercase font-semibold'>{name}</h4>
                <p>{recipe}</p>
            </div>
            <p className='text-orange-600'>${price}</p>
        </div>
    );
};

export default MenuItem;