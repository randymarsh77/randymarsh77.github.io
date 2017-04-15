import React from 'react';
import './styles.less';

export default ({ title, description, projectUri }) => (
	<div className="cardContainer">
		<div className="card" onClick={() => { window.location = projectUri; }}>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
);
