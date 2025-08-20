import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Container>
      <div className="hero-section">
        <h1>Tecnología que Inspira</h1>
        <p>Descubre una selección curada de dispositivos y accesorios diseñados para simplificar tu día a día. Compara características, explora opiniones y elige con confianza el producto que mejor se adapta a tus necesidades.</p>
        <Button as={Link} to="/" variant="outline-light" size="lg" style={{ fontWeight: 700, color: '#fff', borderColor: 'rgba(255,255,255,0.85)' }}>Explorar todo el catálogo y comenzar a comprar</Button>
      </div>
    </Container>
  );
}

export default Hero;