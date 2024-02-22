import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Shared/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import PrivateRoute from './PrivateRoute';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import DashboardLayout from '../Layout/DashboardLayout';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: 'manageUsers',
                element: <AllUsers />
            },
            {
                path: 'myCart',
                element: <MyCart />
            }
        ]
    }
])

export default router;