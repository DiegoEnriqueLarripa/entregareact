import Item from '../Items/Item';

const ItemList = ({ products }) => {
	return (
		<div style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
			gap: '16px',
			alignItems: 'stretch',
			maxWidth: '1200px',
			margin: '0 auto'
		}}>
			{products.map(prod => <Item key={prod.id} {...prod} />)}
		</div>
	);
};

export default ItemList;