import React from 'react'
import classes from './TotalPayable.module.css';

const TotalPayable = () => {
  return (
    <>
      <div className={classes.totaltext}>
      <div className={classes.infoContainer}>
      <p>Total payable:</p>
      <p>$XXX</p>
      </div>
      </div>
    </>
  )
}

export default TotalPayable