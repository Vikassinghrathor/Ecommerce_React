import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartContext from '../../../Store/Cart-Context'; // Import CartContext

const Items = ({ productsArr }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (product) => {
    cartCtx.addItem({
      id: product.title, // You might need to adjust this based on your product structure
      name: product.title,
      price: product.price,
      amount: 1,
    });
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Music</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.imageUrl} />
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
