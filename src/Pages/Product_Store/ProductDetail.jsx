// ProductDetail.jsx
import React from 'react';

const ProductDetail = ({ location }) => {
  // Check if location and location.state are defined
  if (!location || !location.state) {
    return <div>No product selected</div>;
  }

  // Destructure product from location.state
  const { product } = location.state;

  return (
    <div>
      <h2>{product.title}</h2>
      <div>
        {/* Display all images for the selected product */}
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
      <div>
        <h3>Product Details</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category.name}</p>
        {/* You can add more details here based on your product structure */}
      </div>
      <div>
        <h3>Reviews</h3>
        {/* Display reviews or other product details */}
        {/* Add your logic here */}
      </div>
    </div>
  );
};

export default ProductDetail;
