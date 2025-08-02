import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5 p-4 text-center" style={{ backgroundColor: '#343A40', color: 'white' }}>
      <Container>
        <p>© {new Date().getFullYear()} MiTienda. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;