import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Product_Store/Store';
import ProductDetail from './Pages/Product_Store/ProductDetail';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import AuthPage from './Pages/Auth/AuthPage';
import CartProvider from './Store/CartProvider';
import AuthContext from './Store/auth-context';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/productdetails/:productId" element={<ProductDetail />} />
          <Route
            path="/login"
            element={authCtx.isLoggedIn ? <Navigate to="/store" replace /> : <AuthPage />}
          />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
