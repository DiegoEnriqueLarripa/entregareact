import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsCategory } from '../asyncMock';
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		const asyncFunc = id ? getProductsCategory : getProducts;
		asyncFunc(id)
			.then((response) => setProducts(response))
			.catch((err) => setError(err?.message || 'Error cargando productos'))
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<Container className="mt-4">
			<h2 className="text-center mb-4">{id ? `Categoría: ${id}` : 'Nuestros Productos'}</h2>
			{loading && <p className="text-center">Cargando...</p>}
			{error && <p className="text-center text-danger">{error}</p>}
			{!loading && !error && <ItemList products={products} />}
		</Container>
	);
}

export default ItemListContainer;