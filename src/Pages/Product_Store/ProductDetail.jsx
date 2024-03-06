// ProductDetail.jsx
import React, { useContext, useState } from "react";
import classes from "./ProductDetails.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button, Form } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CartContext from "../../Store/Cart-Context";

const ProductDetail = () => {
  const location = useLocation();
  const cartCtx = useContext(CartContext);

  console.log("Location in ProductDetail:", location);

  // Declare state at the top level
  const [quantity, setQuantity] = useState(1);

  if (!location || !location.state || !location.state.product) {
    return <div className="ProductDetailContainer">No product selected</div>;
  }

  const { product } = location.state;

  // Ensure the images array is properly formatted
  const images = Array.isArray(product.images) ? product.images : [];

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: product.title,
      name: product.title,
      price: product.price,
      amount: quantity,
    });
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar showHeaderCartButton={true} />
      <Header />
      <div className={classes.ProductDetailContainer}>
        <h2>{product.title}</h2>
        <Slider className={classes.ProductDetailImages} {...sliderSettings}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              loading="lazy"
            />
          ))}
        </Slider>
        <div className={classes.ProductDetails}>
          <h3>Product Details</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category.name}</p>
          <Form.Group>
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </Form.Group>
          <p>Total Price: ${product.price * quantity}</p>
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
