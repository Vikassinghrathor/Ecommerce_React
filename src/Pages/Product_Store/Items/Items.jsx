// Items.jsx
import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartContext from '../../../Store/Cart-Context';
import { useNavigate } from 'react-router-dom';

const Items = ({ productsArr }) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const addToCartHandler = (product) => {
    console.log(product)
    cartCtx.addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      amount: 1,
      productDetails: product,
    });
  
    // Pass product information in the state object
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  
  

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCartHandler(product)}>
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
