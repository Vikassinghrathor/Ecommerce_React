import React from 'react';
import Header from '../../components/Header/Header';
import Items from './Items/Items';
import CartProvider from '../../Store/CartProvider';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Store = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <CartProvider>
      <>
      <Navbar showHeaderCartButton={true}/>
      <Header />
      <Items productsArr={productsArr} />
      <Footer/>
      </>
    </CartProvider>
  );
}

export default Store;
