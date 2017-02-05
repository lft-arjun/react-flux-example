$ = jQuery = require('jquery');

var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/aboutPage');
( function(win) {
	"use strict";
var App = React.createClass({

	render: function() {
		var Child;

		switch (this.props.route) {
			case 'about': Child = About; break;
			default: Child = Home;
		}

		return (
				<div>
					<Child />
				</div>
			);
	}
}); 

function render() {
	var route = win.location.hash.substr(1);
	ReactDom.render(<App route={route} />, document.getElementById('root'));
}
win.addEventListener('hashchange', render);

render();
})(window);

