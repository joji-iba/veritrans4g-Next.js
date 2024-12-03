'use client';

import React from 'react';
import PaymentForm from './components/PaymentForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Card Payment</h1>
      <PaymentForm />
    </div>
  );
};

export default HomePage;
