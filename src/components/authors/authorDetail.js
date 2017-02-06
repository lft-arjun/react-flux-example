"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var AuthorDetailPage = React.createClass({
	getInitialState: function() {
		return { author: ''};
	},
	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({author: AuthorApi.getAuthorById(this.props.params.id)});
		}
	},
	render: function() {
		
		return (
				<div className="jumbotron">
					<ul>
						<li>ID: {this.state.author.id}</li>
						<li>Name: {this.state.author.firstName} {this.state.author.lastName}</li>
					</ul>
				</div>
			);
	}
});

module.exports = AuthorDetailPage;