import React from 'react'; //eslint-disable-line no-unused-vars
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//import Layout from 'app/javascripts/layout.jsx';
import HomePage from 'app/javascripts/components/homePage';


const history = createBrowserHistory();
const routes = (
	<Router history={history}>
		<Route path='/' component={HomePage} />
	</Router>
);

export default routes;
