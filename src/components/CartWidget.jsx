import React, { useContext, useState, useEffect } from 'react';
import { Badge, Offcanvas, Button, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const CartWidget = () => {
  const { items, getTotalQuantity, getTotalPrice, removeItem } = useContext(CartContext);
  const qty = getTotalQuantity();
  const total = getTotalPrice();
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (qty > 0) {
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(t);
    }
  }, [qty]);

  const handleOpen = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <a href="#" onClick={handleOpen} className={`link-reset ${animate ? 'cart-bounce' : ''}`} style={{ display: 'inline-flex', alignItems: 'center' }} aria-label="Abrir mini-carrito para revisar productos agregados">
        <span role="img" aria-label="carrito de compras">🛒</span>
        {qty > 0 && <Badge bg="danger" className="ms-1">{qty}</Badge>}
      </a>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos agregados al carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p>Aún no has agregado productos. Explora el catálogo y añade tus favoritos para verlos aquí.</p>
          ) : (
            <>
              <ListGroup variant="flush" className="mb-3">
                {items.map((i) => (
                  <ListGroup.Item key={i.id} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center" style={{ gap: 12 }}>
                      <img src={i.img} alt={`Miniatura de ${i.name}`} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
                      <div>
                        <div style={{ fontWeight: 600 }}>{i.name}</div>
                        <small>{i.quantity} unidad(es) x ${i.price}</small>
                      </div>
                    </div>
                    <Button variant="outline-danger" size="sm" onClick={() => removeItem(i.id)}>Quitar del carrito</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <strong>Total estimado</strong>
                <strong>${total}</strong>
              </div>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={() => { setShow(false); navigate('/cart'); }}>Ver resumen completo del carrito</Button>
                <Button as={Link} to="/" variant="outline-secondary" onClick={() => setShow(false)}>Seguir explorando el catálogo</Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;