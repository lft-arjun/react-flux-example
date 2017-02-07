"use strict";

var React = require('react');
var Router = require('react-router');
var hashHistory = require('react-router').hashHistory;
var toastr = require('toastr');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var AuthorAddPage = React.createClass({

    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''}
        }
    },
    setAutherState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    saveAuthor: function(event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Your data has successfully saved.');
        hashHistory.push('/authors'); 
    },
    render: function() {
        return (
            <div className="jumbotron">
                <AuthorForm 
                 author={this.state.author}
                  onChange={this.setAutherState}
                  onSave = {this.saveAuthor}
                   />
            </div>
        );
    }
});

module.exports = AuthorAddPage;

