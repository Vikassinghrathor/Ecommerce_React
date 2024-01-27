// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';
import CartProvider from './Store/CartProvider';
const App = () => {
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
        <Navbar />
        <Header />
        <Items productsArr={productsArr} />
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
