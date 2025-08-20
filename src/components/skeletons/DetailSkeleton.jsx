import React from 'react';

const DetailSkeleton = () => (
	<div className="container" style={{ maxWidth: 960 }}>
		<div className="row g-4">
			<div className="col-md-6">
				<div className="shimmer" style={{ height: 420, borderRadius: 12 }} />
			</div>
			<div className="col-md-6">
				<div className="shimmer" style={{ height: 28, width: '60%', borderRadius: 6, marginBottom: 12 }} />
				<div className="shimmer" style={{ height: 14, width: '90%', borderRadius: 6, marginBottom: 8 }} />
				<div className="shimmer" style={{ height: 14, width: '80%', borderRadius: 6, marginBottom: 8 }} />
				<div className="shimmer" style={{ height: 44, width: '100%', borderRadius: 8, marginTop: 16 }} />
			</div>
		</div>
	</div>
);

export default DetailSkeleton; 