// CustomNavbar.jsx
import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import HeaderCartButton from '../Header/HeaderCartButton';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

const CustomNavbar = ({ showHeaderCartButton }) => {
  return (
    <>
      <BootstrapNavbar className='nav__con'>
        <Container style={{ justifyContent: 'center', paddingLeft: showHeaderCartButton ? '200px' : '0' }}>
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
        {showHeaderCartButton && <HeaderCartButton />}
      </BootstrapNavbar>
    </>
  );
};

export default CustomNavbar;
