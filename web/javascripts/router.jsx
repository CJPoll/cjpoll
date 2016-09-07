import React from 'react'; //eslint-disable-line no-unused-vars
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//import Layout from 'web/javascripts/layout.jsx';
import HomePage from 'web/javascripts/components/homePage';


const history = createBrowserHistory();
const routes = (
	<Router history={history}>
		<Route path='/about' component={HomePage} />
	</Router>
);

export default routes;
