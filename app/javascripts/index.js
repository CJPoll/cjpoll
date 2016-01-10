import React from 'react';
import ReactDom from 'react-dom';
import Application from 'app/javascripts/components/application.js';

document.addEventListener('DOMContentLoaded', function() {
	const appDiv = document.getElementById('application');
	const application = React.createElement(Application);
	ReactDom.render(application, appDiv);
});
