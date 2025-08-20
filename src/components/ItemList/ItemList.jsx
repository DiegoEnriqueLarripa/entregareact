import Item from '../Items/Item';

const ItemList = ({ products }) => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
			{products.map(prod => <Item key={prod.id} {...prod} />)}
		</div>
	);
};

export default ItemList;