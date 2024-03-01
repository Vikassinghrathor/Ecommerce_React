import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import HeaderCartButton from '../Header/HeaderCartButton';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

const CustomNavbar = ({ showHeaderCartButton }) => {
  return (
    <>
      <BootstrapNavbar className='nav__con'>
        <Container style={{ justifyContent: 'center', paddingLeft: showHeaderCartButton ? '200px' : '0' }}>
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store" style={{ color: 'white' }}>
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
        {showHeaderCartButton && <HeaderCartButton />}
      </BootstrapNavbar>
    </>
  );
};

export default CustomNavbar;
