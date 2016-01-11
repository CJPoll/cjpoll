import React from 'react';

const FooterWidget = React.createClass({
	render() {
		return (
			<div className="col-md-4 footer-widget">
				{this.props.children}
			</div>
		);
	}
});

export default FooterWidget;

