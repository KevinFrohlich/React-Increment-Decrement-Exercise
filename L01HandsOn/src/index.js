import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div>
		<h1>My Favorite Things</h1>
		<ul>
			<li className="favoriteColors">My Favorite Colors</li>
			<ol>
				<li>Blue</li>
				<li>yellow</li>
				<li>red</li>
			</ol>
			<li className="favoriteMusic">My Favorite Music</li>
			<ol>
				<li>Bluegrass</li>
				<li>Folk</li>
				<li>Soft Rock</li>
			</ol>
			<li className="favoriteFood">My Favorite Food</li>
			<ol>
				<li>Anything Lebanese</li>
				<li>Curried Lamb</li>
				<li>Barbeque</li>
			</ol>
			<li className="favoriteWebsite">My Favorite Websites</li>
			<ol>
				<li>
					<a href="https://www.froggies-art.com/portfolio">My Portfolio</a>
				</li>
				<li>
					<a href="https://www.youtube.com">You Tube</a>
				</li>
				<li>
					<a href="https://www.bethel.tv">Bethel TV</a>
				</li>
			</ol>
		</ul>
	</div>,
	document.getElementById('root')
);

/*const color1 = React.createElement('li', {}, 'Blue');
const color2 = React.createElement('li', {}, 'Yellow');
const color3 = React.createElement('li', {}, 'Red');

const music1 = React.createElement('li', {}, 'Bluegrass');
const music2 = React.createElement('li', {}, 'Folk');
const music3 = React.createElement('li', {}, 'Soft Rock');

const food1 = React.createElement('li', {}, 'Anything Lebanese');
const food2 = React.createElement('li', {}, 'Curried Lamb');
const food3 = React.createElement('li', {}, 'Barbeque');

const website1 = React.createElement(
	'li',
	{},
	React.createElement('a', { href: 'https://www.froggies-art.com/portfolio' }, 'My Portfolio')
);
const website2 = React.createElement(
	'li',
	{},
	React.createElement('a', { href: 'https://www.youtube.com' }, 'www.youtube.com')
);
const website3 = React.createElement(
	'li',
	{},
	React.createElement('a', { href: 'https://www.bethel.tv' }, 'www.Bethel.tv')
);

ReactDOM.render(
	React.createElement(
		'div',
		{},
		React.createElement('h1', {}, 'My Favorite Things'),
		React.createElement(
			'ul',
			{},
			React.createElement(
				'li',
				{ className: 'favoriteColors' },
				'Favorite Colors',
				React.createElement('ol', {}, color1, color2, color3)
			),
			React.createElement(
				'li',
				{ className: 'favoriteMusic' },
				'Favorite Music',
				React.createElement('ol', {}, music1, music2, music3)
			),
			React.createElement(
				'li',
				{ className: 'favoriteFood' },
				'Favorite Food',
				React.createElement('ol', {}, food1, food2, food3)
			),
			React.createElement(
				'li',
				{ className: 'favoriteWebsites' },
				'Favorite Websites',
				React.createElement('ol', {}, website1, website2, website3)
			)
		)
	),
	document.getElementById('root')
); */
