import React from 'react';

const Sidebar = React.createClass({
	render() {
		return (
			<aside className="col-md-4 blog-aside">
				{this.props.children}
				<div className="aside-widget">
					<header>
						<h3>A simple widget</h3>
					</header>
					<div className="body">
						that says hi!
					</div>
				</div>
			</aside>
		);
	}
});

export default Sidebar;

