// Checkout.jsx

import React from 'react';
import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import Footer from '../../components/Footer/Footer';
import QuerySection from '../../components/QuerySection/QuerySection';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import './globalcheckout.css'; // Import the global styles
import localStyles from './Checkout.module.css';

const Checkout = () => {
  return (
    <div className={`checkout-global ${localStyles.checkout}`}>
      {/* Global styles for Checkout */}
      <Header />
      <InputForm />
      <ComingSoon />
      <QuerySection />
      <Footer />
      {/* Local styles specific to Checkout */}
    </div>
  );
};

export default Checkout;
