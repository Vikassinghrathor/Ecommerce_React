import React from 'react'
import Visa from '../../../assests/visa.svg';
import MasterCard from '../../../assests/mastercard.svg';
import Diners from '../../../assests/diners-club.svg';
import classes from './PaymentIcon.module.css';


const PaymentIcons = () => {
  return (
    <>
      <div className={classes.paymenticon}>
      <img src={Visa} alt='error'/>
      <img src={MasterCard} alt='error'/>
      <img src={Diners} alt='error'/>
      </div>
    </>
  )
}

export default PaymentIcons