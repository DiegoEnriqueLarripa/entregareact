import React from 'react';
import { useLocation } from 'react-router-dom';

const RouteFade = ({ children }) => {
	const location = useLocation();
	return (
		<div key={location.pathname} className="route-fade">
			{children}
		</div>
	);
};

export default RouteFade; 