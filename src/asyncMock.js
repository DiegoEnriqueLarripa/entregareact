export const products = [
	{ id: '1', name: 'iPhone 15', category: 'celulares', price: 999999, stock: 10, img: '/products/iphone15.webp', description: 'Diseño premium y rendimiento veloz para el día a día. Su pantalla Super Retina ofrece colores vibrantes y brillo uniforme, mientras que la cámara captura fotos nítidas incluso con poca luz. Batería optimizada y carga rápida para acompañarte todo el día.', freeShipping: true, discount: 15 },
	{ id: '2', name: 'Samsung S24', category: 'celulares', price: 899999, stock: 8, img: '/products/s24.webp', description: 'Potencia y fluidez con una pantalla de alta tasa de refresco ideal para gaming y multimedia. Sistema de cámaras versátil con gran angular y telefoto para lograr tomas claras y detalladas. Autonomía sólida y carga rápida para que no te detengas.', freeShipping: true, discount: 10 },
	{ id: '3', name: 'iPad Air', category: 'tablets', price: 599999, stock: 12, img: '/products/ipad-air.webp', description: 'Ligera, potente y lista para crear. La pantalla Liquid Retina ofrece excelente definición para estudiar, dibujar o ver series. Compatible con Apple Pencil y teclado, para convertirla en tu cuaderno inteligente o estación de trabajo portátil.', freeShipping: false, discount: 5 },
	{ id: '4', name: 'Galaxy Tab', category: 'tablets', price: 549999, stock: 7, img: '/products/galaxy-tab.webp', description: 'Una gran pantalla para disfrutar contenido con claridad y colores vivos. Ideal para productividad con multitarea y S Pen, además de una batería que te acompaña durante toda la jornada. Perfecta para estudiar, trabajar o entretenerte.', freeShipping: true, discount: 12 },
	{ id: '5', name: 'MacBook Air', category: 'notebooks', price: 1199999, stock: 5, img: '/products/macbook-air.webp', description: 'Ultraliviana y silenciosa, pensada para rendir sin esfuerzo. La pantalla Retina brinda textos nítidos e imágenes realistas, y su batería de larga duración te permite pasar el día sin cargador. Ideal para estudiantes y profesionales en movimiento.', freeShipping: true, discount: 8 },
	{ id: '6', name: 'Dell XPS 13', category: 'notebooks', price: 1099999, stock: 6, img: '/products/dell-xps-13.webp', description: 'Diseño compacto con chasis de aluminio y borde casi inexistente en pantalla. Rendimiento confiable para trabajo y edición ligera, con teclado cómodo y touchpad preciso. Excelente balance entre portabilidad, potencia y autonomía.', freeShipping: false, discount: 0 }
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