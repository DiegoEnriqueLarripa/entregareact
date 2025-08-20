import React, { useState } from 'react';

const ProgressiveImage = ({ src, alt, style, className, height, width }) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div style={{ position: 'relative', overflow: 'hidden', borderRadius: 8, height, width }} className={className}>
			<img
				src={src}
				alt={alt}
				loading="lazy"
				onLoad={() => setLoaded(true)}
				style={{
					display: 'block',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
					filter: loaded ? 'none' : 'blur(12px)',
					transform: loaded ? 'scale(1)' : 'scale(1.02)',
					transition: 'filter 300ms ease, transform 300ms ease, opacity 300ms ease',
					opacity: loaded ? 1 : 0.8,
					...style,
				}}
			/>
		</div>
	);
};

export default ProgressiveImage; 