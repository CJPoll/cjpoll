import React from 'react';

const Caption = React.createClass({
	render() {
		return (
			<span className="caption">{this.props.children}</span>
		);
	}
});

export default Caption;

