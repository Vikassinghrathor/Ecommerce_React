// ProductDetail.jsx
import React, { useContext } from 'react';
import './ProductDetails.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button } from 'react-bootstrap';
import CartContext from '../../Store/Cart-Context';

const ProductDetail = () => {
  const location = useLocation();
  const cartCtx = useContext(CartContext);

  console.log('Location in ProductDetail:', location);

  if (!location || !location.state || !location.state.product) {
    return <div className="ProductDetailContainer">No product selected</div>;
  }

  const { product } = location.state;
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: product.title, // You might need to adjust this based on your product structure
      name: product.title,
      price: product.price,
      amount: 1,
    });
  };

  return (
    <>
      <Navbar showHeaderCartButton={true} />
      <Header />
      <div className="ProductDetailContainer">
        <h2>{product.title}</h2>
        <div className="ProductDetailImages">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
        </div>
        <div className="ProductDetails">
          <h3>Product Details</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category.name}</p>
          <Button variant="primary" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
