// Navbar.jsx
import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import HeaderCartButton from '../Header/HeaderCartButton';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
  return (
    <>
      <BootstrapNavbar className='nav__con'>
        <Container style={{ justifyContent: 'center', paddingLeft: '200px' }}>
          <Nav>
            <Nav.Link href="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href="/store" style={{ color: 'white' }}>
              Store
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: 'white' }}>
              About
            </Nav.Link>
          </Nav>
        </Container>
        <HeaderCartButton />
      </BootstrapNavbar>
    </>
  );
};

export default CustomNavbar;
