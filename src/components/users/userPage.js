"use strict";

var React = require('react');

var UserListPage = require('./userListPage');

var UserPage = React.createClass({
	getInitialState: function() {
		return { users: []};
	},
    componentDidMount: function() {
        var component = this;
        $.get('https://reqres.in/api/users', function(resp){
            // console.log(resp.data);
            component.setState({users: resp.data});
        });
    },
	render: function() {
		return (
			<div className="jumbotron">
				Main User page
				<UserListPage users = {this.state.users} />
			</div>
		);
	}
});

module.exports = UserPage;