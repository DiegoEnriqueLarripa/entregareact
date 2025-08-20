import React, { createContext, useMemo, useState, useCallback, useEffect } from 'react';

export const CartContext = createContext({
	items: [],
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
	updateQuantity: () => {},
	getTotalQuantity: () => 0,
	getTotalPrice: () => 0,
});

const STORAGE_KEY = 'fravego_cart_v1';

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			return saved ? JSON.parse(saved) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {
			// ignorar errores de almacenamiento
		}
	}, [items]);

	const addItem = useCallback((product, quantity) => {
		setItems((prev) => {
			const index = prev.findIndex((i) => i.id === product.id);
			if (index !== -1) {
				const updated = [...prev];
				updated[index] = { ...updated[index], quantity: updated[index].quantity + quantity };
				return updated;
			}
			return [...prev, { ...product, quantity }];
		});
	}, []);

	const updateQuantity = useCallback((id, quantity) => {
		setItems((prev) => {
			return prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i));
		});
	}, []);

	const removeItem = useCallback((id) => {
		setItems((prev) => prev.filter((i) => i.id !== id));
	}, []);

	const clearCart = useCallback(() => setItems([]), []);

	const getTotalQuantity = useCallback(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
	const getTotalPrice = useCallback(() => items.reduce((sum, i) => sum + i.quantity * i.price, 0), [items]);

	const value = useMemo(() => ({ items, addItem, removeItem, clearCart, updateQuantity, getTotalQuantity, getTotalPrice }), [items, addItem, removeItem, clearCart, updateQuantity, getTotalQuantity, getTotalPrice]);

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
}; 