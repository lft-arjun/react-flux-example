"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
	render: function() {
		return (
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<Link to="/" className="navbar-brand">
							<img src="images/small-logo.png" alt="pint" />
						</Link>
						<ul className="nav navbar-nav">
							<li> <Link to="/" className="active">Home</Link></li>
							<li> <Link to="/about" className="active">About</Link></li>
							<li> <Link to="/authors" className="active">Authors</Link></li>
							<li> <Link to="/users" className="active" >Users</Link></li>

						</ul>
					</div>
				</nav>
			);
	}
});

module.exports = Header; 