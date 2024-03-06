import React from 'react'
import classes from './InfoBanner.module.css';
import { BsFillInfoCircleFill } from "react-icons/bs";

const InfoBanner = () => {
  return (
    <>
      <div className={classes.box} role="alert">
      <div className={classes.textbox}>
      <p className={classes.heading}>Free cancellation</p>
      <p className={classes.text}>Tickets can be cancelled by 13th December, 2022.</p>
      </div>
      <BsFillInfoCircleFill style={{marginLeft: '30px' , marginBottom : '30px' }}/>
      </div>
    </>
    )
}

export default InfoBanner