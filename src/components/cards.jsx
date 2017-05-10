import React from 'react';
import Card from './card';

const CardData = {
	cards: [
		{
			title: 'Amethyst',
			description: 'A wireless home audio solution. Essentially a collection of metadata and content servers, iOS and macOS controller applications, iOS (and eventually web + rPi) player applications.',
			projectUri: 'https://github.com/randymarsh77/amethyst',
		},
		{
			title: 'Crystal',
			description: 'Synchronized, wireless audio. The audio "engine" that backs Amethyst\'s content streaming.',
			projectUri: 'https://github.com/randymarsh77/crystal',
		},
		{
			title: 'Fractals',
			description: 'Fractal image renderer using React and service workers. Supports Mandelbrot and Julia with various parameter and coloring configurations.',
			projectUri: 'https://randymarsh77.github.io/fractals',
		},
		{
			title: 'SwiftX',
			description: 'CLI for doing stuff with Swift projects.',
			projectUri: 'https://github.com/randymarsh77/swiftx',
		},
		{
			title: 'BugFlow',
			description: 'FogBugz case integration in FlowDock. Project is dead; we now use Jira. Chrome extension that replaces FB case urls with inline case information in FlowDock flows. Supports authentication and custom FogBugz deployments.',
			projectUri: 'https://randymarsh77.github.io/bugflow',
		},
	],
};

export default () => {
	const cards = CardData.cards.map(({ title, description, projectUri }) =>
		<Card key={title} title={title} description={description} projectUri={projectUri} />,
	);
	return (
		<div>
			{cards}
		</div>
	);
};
