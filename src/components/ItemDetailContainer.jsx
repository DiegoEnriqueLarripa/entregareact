import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		getProductById(id)
			.then((response) => setProduct(response))
			.catch((err) => setError(err?.message || 'Error cargando producto'))
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<Container className="mt-4">
			{loading && <p className="text-center">Cargando...</p>}
			{error && <p className="text-center text-danger">{error}</p>}
			{!loading && !error && product && <ItemDetail {...product} />}
		</Container>
	);
}

export default ItemDetailContainer; 