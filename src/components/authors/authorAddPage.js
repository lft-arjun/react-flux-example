"use strict";

var React = require('react');
var Router = require('react-router');
var hashHistory = require('react-router').hashHistory;
var toastr = require('toastr');
var AuthorForm = require('./authorForm');
// var AuthorApi = require('../../api/authorApi');
var AuthorAction = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var AuthorAddPage = React.createClass({
   
    statics: {
        willTransitionFrom: function(tradition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                tradition.abort();
            }
        }
    },
    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: '', aboutYou: ''},
            errors: [],
            dirty: false
        };
    },
    componentWillMount: function() {
        var authorId = this.props.params.id;

        if (authorId) {
            this.setState({author: authorStore.getAuthorById(authorId)});
        }
    },
    setAutherState: function(event) {
        this.setState({dirty: true}); 
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.author.aboutYou.length < 3) {
            this.state.errors.aboutYou = 'This field must be at least 3 characters';
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});

        return formIsValid;
    },

    saveAuthor: function(event) {
        event.preventDefault();
        
        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorAction.createAuthor(this.state.author);
        this.setState({dirty: false});
        toastr.success('Your data has successfully saved.'); 
        hashHistory.push('/authors'); 
    },
    render: function() {
        return (
            <div className = "jumbotron">
                <AuthorForm 
                 author = {this.state.author}
                  onChange = {this.setAutherState}
                  onSave = {this.saveAuthor}
                  errors = {this.state.errors}
                   />
            </div>
        );
    }
});

module.exports = AuthorAddPage;

