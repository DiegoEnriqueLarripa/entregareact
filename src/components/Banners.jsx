import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const slideStyle = (bg) => ({
  height: 260,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  background: bg,
});

const Banners = () => {
  return (
    <Container className="mb-4">
      <Carousel interval={4500} pause="hover">
        <Carousel.Item>
          <div style={slideStyle('linear-gradient(135deg,#0d6efd,#6610f2)')}>
            <h3 style={{ margin: 0 }}>Ofertas de la semana: hasta 30% OFF</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={slideStyle('linear-gradient(135deg,#20c997,#0ca678)')}>
            <h3 style={{ margin: 0 }}>Envío GRATIS en productos seleccionados</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={slideStyle('linear-gradient(135deg,#f59f00,#e67700)')}>
            <h3 style={{ margin: 0 }}>3 y 6 cuotas sin interés — ¡aprovechá hoy!</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banners; 