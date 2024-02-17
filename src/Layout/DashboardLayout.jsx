import React from 'react';
import { FaBars, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li className='mb-2'><NavLink to={'/'}><FaHome />User Home</NavLink></li>
                    <li className='mb-2'><NavLink to={'/'}><FaCalendarAlt />Reservation</NavLink></li>
                    <li className='mb-2'><NavLink to={'/'}><FaWallet />Payment History</NavLink></li>
                    <li className='mb-2'><NavLink to={'/dashboard/myCart'} ><FaShoppingCart />Manage Items</NavLink></li>
                    <div className="divider"></div>
                    <li className='mb-2'><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li className='mb-2'><NavLink to='/menu'><FaBars />Menu</NavLink></li>
                    <li className='mb-2'><NavLink to='/order/salad'><FaShoppingBag />Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;