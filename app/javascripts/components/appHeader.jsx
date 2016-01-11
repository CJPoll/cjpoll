import React from 'react';
import Masthead from 'app/javascripts/components/masthead';
import Subheader from 'app/javascripts/components/subheader';


const AppHeader = React.createClass({
	render() {
		return (
			<header>
				<Masthead />

				<Subheader />
			</header>
		);
	}
});

export default AppHeader;
