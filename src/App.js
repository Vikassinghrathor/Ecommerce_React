import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Product_Store/Store';
import ProductDetail from './Pages/Product_Store/ProductDetail';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import CartProvider from './Store/CartProvider';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/productdetails/:productId' element={<ProductDetail />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;