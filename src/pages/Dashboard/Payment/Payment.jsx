import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';

// TO DO Stripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);

const Payment = () => {
    const [carts] = useCart();
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(totalPrice.toFixed(2));
    // console.log(price);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Payment</title>
            </Helmet>
            <SectionTitle heading={'Payment'} subHeading={'Please process'} />
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} carts={carts} />
            </Elements>
        </div>
    );
};

export default Payment;