import React from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import Footer from "../../components/Footer/Footer";
import QuerySection from "../../components/QuerySection/QuerySection";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import "./globalcheckout.module.css";
import localStyles from "./Checkout.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Checkout = () => {
  return (
    <div className={`checkout-global ${localStyles.checkout}`}>
      <Navbar />
      <Header />
      <InputForm />
      <ComingSoon />
      <QuerySection />
      <Footer />
    </div>
  );
};

export default Checkout;
