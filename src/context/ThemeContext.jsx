import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const STORAGE_KEY = 'fravego_theme_v1';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved === 'light' || saved === 'dark') return saved;
			return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} catch {
			return 'light';
		}
	});

	useEffect(() => {
		try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	}, []);

	const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}; 