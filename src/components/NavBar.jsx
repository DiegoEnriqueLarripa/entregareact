import React from 'react';
import CartWidget from './CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar expand="lg" style={{ backgroundColor: '#FFFFFF' }} variant="light" className="shadow-sm mb-3">
			<Container>
				<Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', color: '#2C3E50' }}>
					💻 MiTienda
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/category/celulares">Celulares</Nav.Link>
						<Nav.Link as={NavLink} to="/category/tablets">Tablets</Nav.Link>
						<Nav.Link as={NavLink} to="/category/notebooks">Notebooks</Nav.Link>
					</Nav>
					<CartWidget />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;