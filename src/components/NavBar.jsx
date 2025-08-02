import React from 'react';
import CartWidget from './CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FFFFFF' }} variant="light" className="shadow-sm mb-3">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold', color: '#2C3E50' }}>
          💻 MiTienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#celulares">Celulares</Nav.Link>
            <Nav.Link href="#tablets">Tablets</Nav.Link>
            <Nav.Link href="#notebooks">Notebooks</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;