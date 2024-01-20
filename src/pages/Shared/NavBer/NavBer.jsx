import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBer = () => {
    const navOptions = <>
        <li className='me-2'><NavLink to={'/'} className={({isActive}) => isActive && 'bg-orange-600'}>Home</NavLink></li>
        <li className='me-2'><NavLink to={'/menu'} className={({isActive}) => isActive && 'bg-orange-600'}>Our Menu</NavLink></li>
        <li className='me-2'><NavLink to={'/order/salad'} className={({isActive}) => isActive && 'bg-orange-600'}>Order Food</NavLink></li>
    </>
    return (
        <div className="navbar fixed z-40 bg-opacity-40 bg-black max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-40 bg-black rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Bistro Boss Resturent</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBer;