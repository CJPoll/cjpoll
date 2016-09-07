import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Application from 'web/javascripts/components/application.js';

document.addEventListener('DOMContentLoaded', function() {
	window.$ = $;
	window.jquery = $;
	window.jQuery = $;

	require('bootstrap'); //eslint-disable-line no-undef

	const appDiv = document.getElementById('application');
	const application = React.createElement(Application);
	ReactDom.render(application, appDiv);
});
