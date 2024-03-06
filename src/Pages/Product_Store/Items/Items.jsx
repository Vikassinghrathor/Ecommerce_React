// Items.jsx
import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../../../Store/Cart-Context";
import { useNavigate } from "react-router-dom";
import classes from "./Items.module.css"; // Import the module-based CSS

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
    <Container className={classes.Container}>
      <h1>Products</h1>
      <Row style={{justifyContent: "center"}}>
        {productsArr.map((product, index) => (
          <Col key={index} md={4} style={{flex: "none", maxWidth: "26%", margin: "10px"}} >
            <Card className={classes.ProductCard}>
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
                className={classes.CardImage}
              />

              <Card.Body>
                <Card.Title className={classes.CardTitle}>{product.title}</Card.Title>
                <Card.Text className={classes.CardText}>Price: ${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToCartHandler(product)}
                  className={classes.AddToCartBtn}
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
