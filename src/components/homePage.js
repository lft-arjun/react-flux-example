"use strict";

var React = require("react");

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<div className="container">
					<h1> You are in home page</h1>
					<p> React, React router, and Flux for ultra-responsive web apps. </p>
				</div>
			</div>	
		);	
	}
});

module.exports = Home; 