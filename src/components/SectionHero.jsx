import React from 'react';
import { Container } from 'react-bootstrap';

const SectionHero = ({ title, subtitle }) => {
	return (
		<Container>
			<div className="hero-section" style={{ marginTop: '1rem' }}>
				<h1 style={{ fontSize: '2rem' }}>{title}</h1>
				{subtitle ? <p>{subtitle}</p> : null}
			</div>
		</Container>
	);
};

export default SectionHero; 