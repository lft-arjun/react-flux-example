"use strict";

var React = require('react');

var About = React.createClass({

	render: function() {
		return (
				<div className="jumbotron">
                    <div className="row">
                        <h1>About</h1>
                        This is application use the following technologies:
                        <ul>
                            <li> React</li>
                            <li> React Router</li>
                            <li> Flux</li>
                            <li> Node</li>
                            <li> Gulp</li>
                            <li> Browerify</li>
                        </ul>
                    </div>
				</div>	
			);
	}
});

module.exports = About;