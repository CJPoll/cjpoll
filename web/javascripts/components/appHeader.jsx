import React from 'react';
import Masthead from 'web/javascripts/components/masthead';
import Subheader from 'web/javascripts/components/subheader';


const AppHeader = React.createClass({
	render() {
		return (
			<header>
				<Masthead />
			</header>
		);
	}
});

export default AppHeader;
