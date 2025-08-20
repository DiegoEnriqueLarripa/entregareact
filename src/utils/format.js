export const formatCurrency = (value, locale = 'es-AR', currency = 'ARS') => {
	try {
		return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2 }).format(value);
	} catch {
		return `$${value}`;
	}
}; 