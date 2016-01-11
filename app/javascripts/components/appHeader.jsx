import React from 'react';
import Masthead from 'app/javascripts/components/masthead';
import Subheader from 'app/javascripts/components/subheader';


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
