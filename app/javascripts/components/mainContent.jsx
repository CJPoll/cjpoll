import React from 'react';

const MainContent = React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 blog-main">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

export default MainContent;

