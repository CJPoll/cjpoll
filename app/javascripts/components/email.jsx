import React from 'react';

const Email = React.createClass({
	render() {
		return (
			<span className="email">
				{this.props.children}
			</span>
		);
	}
});

export default Email;

