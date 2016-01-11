import React from 'react';

const TalesList = React.createClass({
	render() {
		return (
			<ul className="tales-list">
				{this.props.children}
			</ul>
		);
	}
});

export default TalesList;

