import React from 'react';
import './ProductDetails.css';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  console.log('Location in ProductDetail:', location);

  if (!location || !location.state || !location.state.product) {
    return <div className="ProductDetailContainer">No product selected</div>;
  }

  const { product } = location.state;

  return (
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
      </div>
    </div>
  );
};

export default ProductDetail;
