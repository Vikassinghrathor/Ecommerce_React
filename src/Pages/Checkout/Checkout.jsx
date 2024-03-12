import React from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import Footer from "../../components/Footer/Footer";
import QuerySection from "../../components/QuerySection/QuerySection";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import classes from "./globalcheckout.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Checkout = () => {
  return (
    <div className={classes['checkout-global']}>
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
