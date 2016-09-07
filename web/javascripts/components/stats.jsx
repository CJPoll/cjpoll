import React from 'react';

const Stats = React.createClass({
	render() {
		return (
			<div className="stats">
				{this.props.children}
			</div>
		);
	}
});

export default Stats;

