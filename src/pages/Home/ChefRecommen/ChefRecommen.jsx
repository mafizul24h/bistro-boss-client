import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecommen = () => {
    const [recommends, setRecommends] = useState([]);
    console.log(recommends);
    useEffect(() => {
        fetch('chefRecom.json')
            .then(res => res.json())
            .then(data => setRecommends(data))
    }, [])

    return (
        <div className='mb-20'>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    recommends?.map(recommend => (
                        <div key={recommend._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className='w-full' src={recommend.image} alt={recommend.name} /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">{recommend.name}</h2>
                                <p>{recommend.recipe}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-outline border-0 border-b-4 uppercase">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ChefRecommen;