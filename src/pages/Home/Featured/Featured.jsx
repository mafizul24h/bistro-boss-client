import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from './../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div style={{backgroundImage: `url("${featuredImage}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className='bg-fixed mb-16 text-white'>
            <div className='bg-black bg-opacity-40 pt-8'>
                <SectionTitle subHeading={'Check it out'} heading={'From Our Menu'} />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-4 pb-20 px-32'>
                    <img className='rounded-md' src={featuredImage} alt="Featured" />
                    <div className='space-y-2'>
                        <h4 className='text-xl'>March 20, 2024</h4>
                        <h4 className='text-xl uppercase'>WHERE CAN I GET SOME?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;