import React, { useEffect, useMemo, useState } from 'react';
import { Container, Spinner, Form, Row, Col } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { getProducts, getProductsCategory } from '../asyncMock';
import ItemList from './ItemList/ItemList';
import SectionHero from './SectionHero';
import CardSkeleton from './skeletons/CardSkeleton';

const ItemListContainer = () => {
	const { id } = useParams();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const initialQ = params.get('q') || '';
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState(initialQ);
	const [sort, setSort] = useState('relevance');

	useEffect(() => {
		setLoading(true);
		setError(null);
		const asyncFunc = id ? getProductsCategory : getProducts;
		asyncFunc(id)
			.then((response) => setProducts(response))
			.catch((err) => setError(err?.message || 'Se produjo un inconveniente al cargar el catálogo. Por favor, intenta nuevamente en unos segundos.'))
			.finally(() => setLoading(false));
	}, [id]);

	useEffect(() => {
		setSearch(initialQ);
	}, [initialQ]);

	const filtered = useMemo(() => {
		const q = (search || '').trim().toLowerCase();
		let list = products.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
		if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
		if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
		if (sort === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
		return list;
	}, [products, search, sort]);

	return (
		<>
			{ id && (
				<SectionHero title={`Categoría: ${id}`} subtitle={'Explora los mejores productos de esta categoría cuidadosamente seleccionados para ti.'} />
			)}
			<Container className="mt-3">
				<Row className="g-2 align-items-center mb-3">
					<Col xs={12} md={6}>
						<Form.Control placeholder="Buscar por nombre de producto o características principales" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Campo de búsqueda del catálogo" />
					</Col>
					<Col xs={12} md="auto">
						<Form.Select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Selector de ordenamiento del listado de productos">
							<option value="relevance">Ordenar por relevancia</option>
							<option value="price-asc">Ordenar por precio: de menor a mayor</option>
							<option value="price-desc">Ordenar por precio: de mayor a menor</option>
							<option value="name-asc">Ordenar alfabéticamente: de A a Z</option>
						</Form.Select>
					</Col>
				</Row>
				{loading && (
					<div style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
						gap: '16px',
						alignItems: 'stretch',
						maxWidth: '1200px',
						margin: '0 auto'
					}}>
						{Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
					</div>
				)}
				{error && <p className="text-center text-danger" role="alert">{error}</p>}
				{!loading && !error && <ItemList products={filtered} />}
			</Container>
		</>
	);
}

export default ItemListContainer;