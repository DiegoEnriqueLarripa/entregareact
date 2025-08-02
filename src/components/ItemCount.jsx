
import React, { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';


const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial);


  const handleIncrement = () => {

    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Card style={{ width: '18rem' }} className="text-center mx-auto mt-4">
      <Card.Body>
        <Card.Title>Camisa Tiger</Card.Title>
        <ButtonGroup aria-label="Contador de items" className="mb-3">
          <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
          <Button variant="light" disabled style={{ color: 'black', cursor: 'default' }}>{count}</Button>
          <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
        </ButtonGroup>
        <br />
        <Button 
          variant="primary" 
          onClick={() => onAdd(count)} 
          disabled={stock === 0} 
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;