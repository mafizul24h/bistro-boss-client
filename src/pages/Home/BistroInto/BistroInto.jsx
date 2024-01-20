import React from 'react';
import './BistroInto.css'
import image from './../../../assets/home/chef-service.jpg'

const BistroInto = () => {
    return (
        <div style={{backgroundImage: `url("${image}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}} className='bg-fixed my-16'>
            <div className='p-12 md:p-24 bg-black bg-opacity-35'>
                <div className='bg-white p-12 md:p-24 '>
                    <h1 className='text-3xl font-semibold uppercase mb-3 text-center'>Bistro Boss Resturent</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis laudantium architecto excepturi vel voluptatum quaerat? Ratione iure ullam eum nihil odit illo at temporibus earum! Quo aliquam voluptas suscipit est, cumque ipsam, consequuntur exercitationem laborum neque, iusto aliquid corporis magnam.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroInto;