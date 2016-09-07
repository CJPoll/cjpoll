import React from 'react';

const Counter = React.createClass({
	render() {
		return (
			<span className="counter">{this.props.children}</span>
		);
	}
});

export default Counter;

