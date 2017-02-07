"use strict";

var React = require('react');
var TextInput = require('../common/textInput'); 

var AuthorForm = React.createClass({

    render: function() {
        return (
            <form>
                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                 /> 
                 <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                 />   
               
                <button type="submit" className="btn btn-default" onClick={this.props.onSave}>Submit</button>
            </form>    
            );
    }
});

module.exports = AuthorForm;