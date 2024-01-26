import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Items = ({ productsArr }) => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Items;