import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container>
      <div className="hero-section">
        <h1>Tecnología que Inspira</h1>
        <p>La mejor selección de gadgets y dispositivos, a un clic de distancia.</p>
        <Button variant="primary" size="lg">Explorar Catálogo</Button>
      </div>
    </Container>
  );
}

export default Hero;