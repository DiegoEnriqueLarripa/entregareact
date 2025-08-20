import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, img, price, stock, description }) => {
	const handleAdd = (quantity) => {
		console.log(`Agregar ${quantity} unidades del producto ${id} al carrito`);
	};

	return (
		<Card className="mx-auto" style={{ maxWidth: 720 }}>
			<Card.Img variant="top" src={img} alt={name} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{description}
					<br />
					<strong>Precio: ${price}</strong>
					<br />
					<small>Stock: {stock}</small>
				</Card.Text>
				<ItemCount initial={1} stock={stock} onAdd={handleAdd} />
				<div className="mt-3">
					<Button as={Link} to="/" variant="secondary">Volver</Button>
				</div>
			</Card.Body>
		</Card>
	);
}

export default ItemDetail; 