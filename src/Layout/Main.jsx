import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBer from '../pages/Shared/NavBer/NavBer';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {noHeaderFooter || <NavBer />}
            <div className='min-h-[calc(100vh-5px)]'>
                <Outlet />
            </div>
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;