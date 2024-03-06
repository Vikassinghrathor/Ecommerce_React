// Items.jsx
import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../../../Store/Cart-Context";
import { useNavigate } from "react-router-dom";

const Items = ({ productsArr }) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    cartCtx.addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      amount: 1,
      productDetails: product,
    });

    // Use the navigate function to navigate to the product details page and pass the product as state
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <Row className="mb-4">
        {productsArr.map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="mb-4" style={{ height: "100%" , margin: '10px'}}>
              <Card.Img
                variant="top"
                src={
                  (product.images &&
                    product.images.length > 0 &&
                    product.images[0]) ||
                  "https://via.placeholder.com/150"
                }
                alt={`Product ${index + 1}`}
                onClick={() => addToCartHandler(product)}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
                style={{ height: "200px", objectFit: "cover", padding: "10px"}}
              />

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToCartHandler(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Items;
