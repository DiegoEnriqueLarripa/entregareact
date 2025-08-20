// src/components/Item/Item.jsx
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/format';
import ProgressiveImage from '../ProgressiveImage';

const Item = ({ id, name, img, price, stock, category, freeShipping, discount }) => {
	const hasDiscount = typeof discount === 'number' && discount > 0;
	const originalPrice = hasDiscount ? Math.round(price / (1 - discount / 100)) : null;

	return (
		<article className="card-hover" style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '12px', width: '100%', textAlign: 'center', backgroundColor: 'var(--card)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 360 }}>
			<div>
				<div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(13,110,253,0.1)', color: 'var(--primary)', padding: '2px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
					{category}
				</div>
				{hasDiscount && (
					<div style={{ position: 'absolute', top: 8, right: 8, background: '#e8f7ee', color: '#2CB67D', padding: '2px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
						{discount}% OFF
					</div>
				)}
				<header>
					<h2 style={{ fontSize: '1.1rem', margin: '0 0 8px' }}>{name}</h2>
				</header>
				<picture>
					<ProgressiveImage src={img} alt={name} height={180} />
				</picture>
				<section style={{ marginTop: '10px' }}>
					{hasDiscount ? (
						<div style={{ marginBottom: 6 }}>
							<span style={{ color: 'var(--muted)', textDecoration: 'line-through', marginRight: 8 }}>{formatCurrency(originalPrice)}</span>
							<span style={{ fontWeight: 700 }}>{formatCurrency(price)}</span>
						</div>
					) : (
						<p style={{ margin: 0, fontWeight: 600 }}>Precio final: {formatCurrency(price)}</p>
					)}
					<p style={{ margin: '4px 0 6px', color: 'var(--muted)' }}>Disponibilidad: {stock} unidades en stock</p>
					<div style={{ height: 20 }}>
						{freeShipping && <span style={{ margin: 0, color: '#2CB67D', fontWeight: 600 }}>Envío GRATIS</span>}
					</div>
				</section>
			</div>
			<footer style={{ marginTop: 10 }}>
				<Link className="link-reset" to={`/item/${id}`}>
					<button style={{ backgroundColor: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer' }}>
						Ver detalle
					</button>
				</Link>
			</footer>
		</article>
	);
};

export default Item;