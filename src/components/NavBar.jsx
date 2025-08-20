import React, { useContext, useState, useRef, useEffect } from 'react';
import CartWidget from './CartWidget';
import { Navbar, Container, Nav, Form, NavDropdown, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

const NavBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [q, setQ] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	const railRef = useRef(null);
	const linkRefs = useRef([]);
	const [highlight, setHighlight] = useState({ left: 0, width: 0, visible: false });

	const onSearch = (e) => {
		e.preventDefault();
		navigate(`/?q=${encodeURIComponent(q)}`);
	};

	const moveHighlightTo = (el) => {
		if (!el || !railRef.current) return;
		const railRect = railRef.current.getBoundingClientRect();
		const rect = el.getBoundingClientRect();
		setHighlight({
			left: rect.left - railRect.left - 6,
			width: rect.width + 12,
			visible: true,
		});
	};

	useEffect(() => {
		// Set to active link on route change
		const active = linkRefs.current.find((ref) => ref && ref.classList.contains('active')) || linkRefs.current[0];
		moveHighlightTo(active);
		// Reposition on resize
		const onResize = () => moveHighlightTo(active);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [location.pathname]);

	return (
		<Navbar expand="lg" style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }} className="shadow-sm mb-3 sticky-top navbar-glass">
			<Container>
				<Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', color: 'var(--text)' }} aria-label="Ir a la portada de Fravego">
					💻 Fravego
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto nav-rail" ref={railRef} onMouseLeave={() => {
						const active = linkRefs.current.find((ref) => ref && ref.classList.contains('active'));
						if (active) moveHighlightTo(active);
					}}>
						{/* floating highlight */}
						<span className="nav-floating" style={{ transform: `translateX(${highlight.left || 0}px)`, width: highlight.width || 0, opacity: highlight.visible ? 1 : 0 }} />
						<NavDropdown title="Categorías" id="nav-categories" menuVariant={theme === 'dark' ? 'dark' : undefined}>
							<NavDropdown.Item as={NavLink} to="/category/celulares">Celulares</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/category/tablets">Tablets</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/category/notebooks">Notebooks</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={NavLink} to="/category/celulares" ref={(el) => (linkRefs.current[0] = el)} onMouseEnter={(e) => moveHighlightTo(e.currentTarget)}>Celulares</Nav.Link>
						<Nav.Link as={NavLink} to="/category/tablets" ref={(el) => (linkRefs.current[1] = el)} onMouseEnter={(e) => moveHighlightTo(e.currentTarget)}>Tablets</Nav.Link>
						<Nav.Link as={NavLink} to="/category/notebooks" ref={(el) => (linkRefs.current[2] = el)} onMouseEnter={(e) => moveHighlightTo(e.currentTarget)}>Notebooks</Nav.Link>
					</Nav>
					<Form className="d-flex" onSubmit={onSearch} role="search" style={{ gap: 8 }}>
						<Form.Control type="search" placeholder="Buscar productos" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar" />
						<Button type="submit" variant="outline-primary">Buscar</Button>
					</Form>
					<div className="d-flex align-items-center ms-3" style={{ gap: 12 }}>
						<Form.Check type="switch" id="theme-switch" label={theme === 'dark' ? 'Oscuro' : 'Claro'} onChange={toggleTheme} checked={theme === 'dark'} />
						<CartWidget />
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;