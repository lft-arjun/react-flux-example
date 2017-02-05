$ = jQuery = require('jquery');

var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');

var App = console.log("Hello world from browserfy"); 



ReactDom.render(<Home />, document.getElementById('root'));