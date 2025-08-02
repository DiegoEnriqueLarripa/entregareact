import React from 'react';
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">{greeting}</h2>
      {}
    </Container>
  );
}

export default ItemListContainer;