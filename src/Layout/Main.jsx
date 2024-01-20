import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../pages/Shared/NavBer/NavBer';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className='min-h-[calc(100vh-30px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;