import React from 'react';
import './Navbar.css';
// import CartButton from '../UI/CartButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed the imported Navbar

const CustomNavbar = () => {
  return (
    <>
      <BootstrapNavbar className='nav__con'>
        <Container style={{justifyContent: 'center'}}>
          <Nav >
            <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color: 'white'}}>Store</Nav.Link>
            <Nav.Link href="#pricing" style={{color: 'white'}}>About</Nav.Link>
           {/* <CartButton style={{display: 'flex' , alignContent: 'flex-end'}}/> */}
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
}

export default CustomNavbar;
