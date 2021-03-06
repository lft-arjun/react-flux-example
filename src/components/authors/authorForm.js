"use strict";

var React = require('react');
var TextInput = require('../common/textInput'); 
var TextareaInput = require('../common/areaInput'); 

var AuthorForm = React.createClass({
     propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.array
    },        
    render: function() {
        return (
            <form>
                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                 /> 
                 <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                 />
                 <TextareaInput
                    name="aboutYou"
                    label="Who you are"
                    value={this.props.author.aboutYou}
                    onChange={this.props.onChange}
                    error={this.props.errors.aboutYou}
                 />   
               
                <button type="submit" className="btn btn-default" onClick={this.props.onSave}>Submit</button>
            </form>    
            );
    }
});

module.exports = AuthorForm;