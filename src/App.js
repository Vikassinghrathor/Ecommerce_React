import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Product_Store/Store';
import AboutUs from './Pages/AboutUs/AboutUs';
import CartProvider from './Store/CartProvider';

function App() {
  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
