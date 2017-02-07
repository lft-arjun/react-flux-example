"use strict";

var React = require('react');
var Link = require('react-router').Link;
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
		return (
				<div className = "jumbotron">
					<Link to="author/add" className="btn btn-primary">Add Author</Link>
					<AuthorList authors = {this.state.authors} />
				</div>
			);
	}
});

module.exports = AuthorPage; 