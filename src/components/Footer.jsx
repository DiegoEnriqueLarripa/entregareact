import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5 p-4 text-center" style={{ backgroundColor: 'var(--card)', color: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
      <Container>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Fravego. Construimos experiencias de compra claras, rápidas y seguras para ayudarte a elegir mejor.</p>
      </Container>
    </footer>
  );
}

export default Footer;