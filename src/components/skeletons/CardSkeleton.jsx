import React from 'react';

const CardSkeleton = () => (
	<div style={{ border: '1px solid var(--border)', borderRadius: 12, padding: 12, background: 'var(--card)' }}>
		<div className="shimmer" style={{ height: 180, borderRadius: 8, marginBottom: 12 }} />
		<div className="shimmer" style={{ height: 16, width: '70%', borderRadius: 4, marginBottom: 8 }} />
		<div className="shimmer" style={{ height: 12, width: '40%', borderRadius: 4 }} />
	</div>
);

export default CardSkeleton; 