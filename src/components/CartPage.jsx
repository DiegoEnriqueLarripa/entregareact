import React, { useContext } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import SectionHero from './SectionHero';

const CartPage = () => {
	const { items, removeItem, clearCart, getTotalPrice, updateQuantity } = useContext(CartContext);
	const total = getTotalPrice();

	if (items.length === 0) {
		return (
			<>
				<SectionHero title="Tu Carrito" subtitle="Revisa tus productos antes de pagar" />
				<div style={{ textAlign: 'center', padding: '2rem' }}>
					<h2>Tu carrito está vacío</h2>
					<p>Explora nuestro catálogo y agrega tus productos favoritos.</p>
					<Button as={Link} to="/" variant="primary">Ir al catálogo</Button>
				</div>
			</>
		);
	}

	return (
		<>
			<SectionHero title="Tu Carrito" subtitle="Revisa tus productos antes de pagar" />
			<div className="container" style={{ maxWidth: 1100 }}>
				<div className="row g-4">
					<div className="col-12 col-lg-8">
						<h2 className="mb-3">Carrito</h2>
						<Table hover responsive>
							<thead>
								<tr>
									<th>Producto</th>
									<th>Precio</th>
									<th style={{ width: 160 }}>Cantidad</th>
									<th>Subtotal</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{items.map((i) => (
									<tr key={i.id}>
										<td style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
											<img src={i.img} alt={i.name} style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }} />
											<span>{i.name}</span>
										</td>
										<td>${i.price}</td>
										<td>
											<div className="d-flex align-items-center" style={{ gap: 8 }}>
												<Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(i.id, i.quantity - 1)}>-</Button>
												<Form.Control value={i.quantity} onChange={(e) => updateQuantity(i.id, Number(e.target.value) || 1)} style={{ width: 64, textAlign: 'center' }} />
												<Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(i.id, i.quantity + 1)}>+</Button>
											</div>
										</td>
										<td>${i.quantity * i.price}</td>
										<td>
											<Button variant="outline-danger" size="sm" onClick={() => removeItem(i.id)}>Eliminar</Button>
										</td>
									</tr>
							))}
							</tbody>
						</Table>
						<div className="d-flex justify-content-between align-items-center gap-2">
							<Button variant="outline-secondary" as={Link} to="/">Seguir comprando</Button>
							<Button variant="outline-danger" onClick={clearCart}>Vaciar carrito</Button>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div className="p-3 border rounded-3" style={{ position: 'sticky', top: 24 }}>
							<h5>Resumen</h5>
							<div className="d-flex justify-content-between">
								<span>Subtotal</span>
								<span>${total}</span>
							</div>
							<div className="d-flex justify-content-between">
								<span>Envío</span>
								<span>A calcular</span>
							</div>
							<hr />
							<div className="d-flex justify-content-between">
								<strong>Total</strong>
								<strong>${total}</strong>
							</div>
							<Button className="w-100 mt-3" variant="primary">Finalizar compra</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage; 