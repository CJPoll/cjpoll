import React from 'react'; //eslint-disable-line no-unused-vars
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Layout from 'app/javascripts/layout.jsx';
import HomePage from 'app/javascripts/components/homePage';


const history = createBrowserHistory();
const routes = (
	<Router history={history}>
		<Route path='/' component={Layout}>
			<IndexRoute component={HomePage} />
		</Route>
	</Router>
);

export default routes;
