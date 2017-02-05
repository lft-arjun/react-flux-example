"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({

	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({authors: AuthorApi.getAllAuthors()});
		}
	},

	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td> <a href = {"/#authors/"+ author.id}>{author.id}</a></td>
					<td> {author.firstName} {author.lastName}</td>
				</tr>	
			);	
		};
		return (
				<div className = "jumbotron">
					<div className = "container">
						<h1>Authors page</h1>
						<AuthorList authors = {this.state.authors} />
					</div>
				</div>
			);
	}
});

module.exports = AuthorPage; 