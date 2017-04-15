import React from 'react';
import './styles.less';

export default ({ title, description, projectUri }) => (
	<div className="cardContainer">
		<button className="buttonWrapper" onClick={() => { window.location = projectUri; }}>
			<div className="card">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</button>
	</div>
);
