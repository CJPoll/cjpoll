import React from 'react';
import Logo from 'web/javascripts/components/logo';
import Navbar from 'web/javascripts/components/navbar';


const Masthead = React.createClass({
	render() {

		return (
			<div className="widewrapper masthead">
				<div className="container">
					<Logo />

					<Navbar />

				</div>
			</div>
		);
	}
});

export default Masthead;
