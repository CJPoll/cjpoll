import React from 'react'; //eslint-disable-line no-unused-vars
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Layout from 'app/javascripts/layout.jsx';

const history = createBrowserHistory();
const routes = (
	<Router history={history}>
		<Route path='/' component={Layout} />
	</Router>
);

export default routes;
