"use strict";

var React = require('react');
var Link = require('react-router').Link;

var UserListPage = React.createClass({
    render: function() {
        var createUserRow = function(user) {
            return (
                <tr key={user.id}>
                    <td> <Link to= {"/authors/detail/" + user.id}>{user.id}</Link></td>
                    <td><img src={user.avatar} className="img-circle" width="50px" height="50px" /><span className="padding-lft-12">{user.first_name} {user.last_name}</span></td>
                </tr>   
            );  
        };
        return (
                <div> 
                    <table className="table">
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                        </thead>
                        <tbody>
                            {this.props.users.map(createUserRow, this)}
                        </tbody>
                    </table>
                </div>
                );
    }
});

module.exports = UserListPage;