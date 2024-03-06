import React from 'react'
import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import Footer from '../../components/Footer/Footer';
import QuerySection from '../../components/QuerySection/QuerySection';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Checkout = () => {
  return (
    <>
      <Header/>
      <InputForm/>
      <ComingSoon/>
      <QuerySection/>
      <Footer/>
    </>
  )
}

export default Checkout