import React from 'react';

const FoodCard = ({ items }) => {
    // const { _id, name, recipe, image, price } = item;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    items?.map(item => (
                        <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className='w-full' src={item.image} alt={item.name} /></figure>
                            <p className='bg-slate-800 text-white absolute right-0 me-5 mt-4 py-2 px-4 rounded-md font-semibold'>${item.price}</p>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
                                <p>{item.recipe}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-outline border-0 border-b-4 uppercase">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
};

export default FoodCard;