import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Pages/Product_Store/Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';
import classes from './HeaderCartButton.module.css';
import Cart from '../../Pages/Product_Store/Cart/Cart'; // Import Cart component

const HeaderCartButton = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items ? items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0) : 0;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items && items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const cartButtonClickHandler = () => {
    setIsCartVisible(true);
  };

  const closeCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <button className={btnClasses} onClick={cartButtonClickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      {isCartVisible && <Cart onClose={closeCartHandler} />}
    </>
  );
};

export default HeaderCartButton;
