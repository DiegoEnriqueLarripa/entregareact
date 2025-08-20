import React, { useContext, useState } from 'react';
import { Card, Button, Row, Col, Toast, ToastContainer, Breadcrumb } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/format';

const ItemDetail = ({ id, name, img, price, stock, description, category }) => {
	const { addItem, getTotalPrice } = useContext(CartContext);
	const [addedQty, setAddedQty] = useState(0);
	const [estimatedTotal, setEstimatedTotal] = useState(null);
	const [showToast, setShowToast] = useState(false);
	const navigate = useNavigate();

	const playBeep = () => {
		try {
			const ctx = new (window.AudioContext || window.webkitAudioContext)();
			const o = ctx.createOscillator();
			const g = ctx.createGain();
			o.type = 'sine';
			o.frequency.value = 880;
			o.connect(g);
			g.connect(ctx.destination);
			g.gain.setValueAtTime(0.001, ctx.currentTime);
			g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
			o.start();
			setTimeout(() => {
				g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
				o.stop(ctx.currentTime + 0.14);
			}, 120);
		} catch (_) {}
	};

	const handleAdd = (quantity) => {
		const preTotal = getTotalPrice();
		addItem({ id, name, price, img }, quantity);
		setAddedQty(quantity);
		setEstimatedTotal(preTotal + quantity * price);
		setShowToast(true);
		playBeep();
	};

	return (
		<Card className="mx-auto" style={{ maxWidth: 960, padding: 16, backgroundColor: 'var(--card)', color: 'var(--text)' }}>
			<Breadcrumb>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Inicio</Breadcrumb.Item>
				{category && (
					<Breadcrumb.Item linkAs={Link} linkProps={{ to: `/category/${category}` }}>{`Categoría: ${category}`}</Breadcrumb.Item>
				)}
				<Breadcrumb.Item active>{`Detalle de ${name}`}</Breadcrumb.Item>
			</Breadcrumb>
			<Row className="g-4 align-items-start">
				<Col md={6}>
					<div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 12, textAlign: 'center' }}>
						<img src={img} alt={`Imagen ilustrativa de ${name}`} style={{ width: '100%', maxHeight: 480, objectFit: 'contain', objectPosition: 'center' }} />
					</div>
				</Col>
				<Col md={6}>
					<h1 style={{ fontSize: '1.6rem', marginBottom: 8 }}>{name}</h1>
					<p style={{ color: 'var(--muted)' }}>{description}</p>
					<p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4 }}>Precio final: {formatCurrency(price)}</p>
					<p style={{ color: 'var(--muted)', marginBottom: 16 }}>Disponibilidad inmediata: {stock} unidades</p>
					<ItemCount initial={1} stock={stock} onAdd={handleAdd} label={`Selecciona la cantidad de unidades para agregar ${name} al carrito`} />
					<div className="mt-3" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
						<Button as={Link} to="/" variant="outline-secondary">Volver al catálogo principal</Button>
						{category ? (
							<Button as={Link} to={`/category/${category}`} variant="outline-primary">Explorar más productos en la categoría {category}</Button>
						) : null}
						{addedQty > 0 && (
							<Button variant="success" onClick={() => navigate('/cart')}>Ir al carrito para revisar y finalizar la compra</Button>
						)}
					</div>
				</Col>
			</Row>
			<ToastContainer position="bottom-end" className="p-3">
				<Toast onClose={() => setShowToast(false)} show={showToast} delay={2400} autohide bg="success">
					<Toast.Header>
						<strong className="me-auto">Carrito actualizado</strong>
						<small>Fravego</small>
					</Toast.Header>
					<Toast.Body style={{ color: '#fff' }}>
						Has agregado {addedQty} unidad(es) de {name}. {estimatedTotal !== null ? `Total estimado en el carrito: ${formatCurrency(estimatedTotal)}.` : ''}
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</Card>
	);
}

export default ItemDetail; 