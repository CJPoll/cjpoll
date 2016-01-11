import React from 'react';

const Line = React.createClass({
	render() {
		return (
			<div className="line">
				{this.props.children}
			</div>
		);
	}
});

export default Line;

