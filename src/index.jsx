import React from 'react';
import { render } from 'react-dom';
import Cards from './components/cards';
import './styles.less';

const App = () => (
	<div className="app">
		<h1>Featured Projects</h1>
		<Cards />
	</div>
);

render((
	<App />
), document.getElementById('app'));
