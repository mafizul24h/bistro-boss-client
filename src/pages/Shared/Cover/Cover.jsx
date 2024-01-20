import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ image, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={image}
            bgImageAlt="Cover"
            strength={-200}
        >
            <div className="hero h-[80vh]" style={{ backgroundImage: `url("${image}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi sapiente nam. Illum vitae voluptatum porro ullam eius numquam aperiam.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;