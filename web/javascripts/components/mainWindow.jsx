import React from 'react';

const MainWindow = React.createClass({
	render() {
		return (
			<div className="widewrapper main">
				{this.props.children}
			</div>
		);
	}
});

export default MainWindow;

