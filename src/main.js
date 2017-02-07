$ = jQuery = require('jquery');

var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/app');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var PageNotFound = require('./components/common/pageNotFound');
var Authors = require('./components/authors/authorPage');
var AuthorAddPage = require('./components/authors/authorAddPage');
var AuthorDetailPage = require('./components/authors/authorDetail');

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="authors" component={Authors} />
            <Route path="authors/detail/:id" component={AuthorDetailPage} />
            <Route path="author/add" component={AuthorAddPage} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
  ), document.getElementById('root'));

