import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='my-8 text-center mx-auto md:w-3/12'>
            <p className='text-orange-600 mb-3'>---{subHeading}---</p>
            <h2 className='text-3xl uppercase font-semibold text-gray-800 border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;