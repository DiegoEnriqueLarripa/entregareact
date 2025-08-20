
import React, { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';


const ItemCount = ({ initial, stock, onAdd, label = 'Selecciona la cantidad deseada' }) => {

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
    <Card style={{ width: '100%', maxWidth: 360 }} className="text-center">
      <Card.Body>
        <Card.Title style={{ fontSize: '1rem', marginBottom: 12 }}>{label}</Card.Title>
        <ButtonGroup aria-label="Selecciona cuántas unidades deseas agregar" className="mb-3">
          <Button variant="outline-secondary" onClick={handleDecrement} aria-label="Reducir cantidad">-</Button>
          <Button variant="light" disabled style={{ color: 'black', cursor: 'default', minWidth: 48 }} aria-live="polite" aria-atomic="true">{count}</Button>
          <Button variant="outline-secondary" onClick={handleIncrement} aria-label="Aumentar cantidad">+</Button>
        </ButtonGroup>
        <br />
        <Button 
          variant="primary" 
          onClick={() => onAdd(count)} 
          disabled={stock === 0} 
        >
          Agregar las unidades seleccionadas al carrito
        </Button>
        {stock === 0 && (
          <div className="mt-2" style={{ color: '#dc3545', fontSize: 12 }}>Actualmente no hay stock disponible para este producto.</div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemCount;