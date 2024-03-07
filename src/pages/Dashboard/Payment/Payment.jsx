import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TO DO Stripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Payment</title>
            </Helmet>
            <SectionTitle heading={'Payment'} subHeading={'Please process'} />
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;