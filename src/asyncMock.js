export const products = [
	{ id: '1', name: 'iPhone 15', category: 'celulares', price: 1200, stock: 10, img: 'https://via.placeholder.com/400x300?text=iPhone+15', description: 'Potente y elegante' },
	{ id: '2', name: 'Samsung S24', category: 'celulares', price: 900, stock: 8, img: 'https://via.placeholder.com/400x300?text=Samsung+S24', description: 'Rendimiento de punta' },
	{ id: '3', name: 'iPad Air', category: 'tablets', price: 700, stock: 12, img: 'https://via.placeholder.com/400x300?text=iPad+Air', description: 'Ligera y potente' },
	{ id: '4', name: 'Galaxy Tab', category: 'tablets', price: 600, stock: 7, img: 'https://via.placeholder.com/400x300?text=Galaxy+Tab', description: 'Gran pantalla' },
	{ id: '5', name: 'MacBook Air', category: 'notebooks', price: 1500, stock: 5, img: 'https://via.placeholder.com/400x300?text=MacBook+Air', description: 'Ultraportátil' },
	{ id: '6', name: 'Dell XPS 13', category: 'notebooks', price: 1400, stock: 6, img: 'https://via.placeholder.com/400x300?text=Dell+XPS+13', description: 'Premium y compacto' }
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
	await delay(600);
	return products;
};

export const getProductsCategory = async (categoryId) => {
	await delay(600);
	return products.filter((p) => p.category === categoryId);
};

export const getProductById = async (id) => {
	await delay(600);
	const product = products.find((p) => p.id === id);
	if (!product) throw new Error('Producto no encontrado');
	return product;
}; 