import React from 'react';

const MobileNav = React.createClass({
	render() {
		return (
			<div id="mobile-nav-toggle" className="pull-right">
				<a href="#" data-toggle="collapse" data-target=".tales-nav .navbar-collapse">
					<i className="fa fa-bars"></i>
				</a>
			</div>
		);
	}
});

export default MobileNav;
