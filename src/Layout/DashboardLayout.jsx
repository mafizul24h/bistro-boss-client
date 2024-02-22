import React, { useContext } from 'react';
import { FaAlignJustify, FaBars, FaBook, FaCalendarAlt, FaHome, FaListUl, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useUser from '../hooks/useUser';
import { AuthContext } from '../providers/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [carts] = useCart();
    const [users] = useUser();
    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content min-h-[100vh]">
                {/* Page content here */}
                <div className='text-left'>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden "><FaAlignJustify /></label>
                </div>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className='mb-2'><NavLink to={'/dashboard/'}><FaHome />Admin Home</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/'}><FaUtensils />Add Items</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/'}><FaListUl />Manage Items</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/'}><FaBook />Manage Bookings</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/manageUsers'}><FaUsers />Manage Users</NavLink></li>
                        </> : <>
                            <li className='mb-2'><NavLink to={'/'}><FaHome />User Home</NavLink></li>
                            <li className='mb-2'><NavLink to={'/'}><FaCalendarAlt />Reservation</NavLink></li>
                            <li className='mb-2'><NavLink to={'/'}><FaWallet />Payment History</NavLink></li>
                            <li className='mb-2'>
                                <NavLink to={'/dashboard/myCart'} ><FaShoppingCart />My Cart <spain className="badge badge-secondary">+{carts?.length || 0}</spain></NavLink>
                            </li>
                        </>
                    }
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