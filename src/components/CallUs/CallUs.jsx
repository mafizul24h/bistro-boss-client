import React from 'react';
import { Link } from 'react-router-dom';

const CallUs = () => {
    return (
        <div className='bg-black text-white my-16 px-4 py-12 md:py-20'>
            <h1 className='text-5xl font-serif text-center'>Call US: <Link to={'tel:01711337820'}>+88 01711337820</Link></h1>
        </div>
    );
};

export default CallUs;