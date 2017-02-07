"use strict";

var React = require('react');

var PageNotFound = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				Page not found. 404
			</div>
			);
	}
});

module.exports = PageNotFound;