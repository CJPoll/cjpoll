import React from 'react';

const MainContent = React.createClass({
	render() {
		return (
			<div className="widewrapper main">
				<div className="container">
					<div className="row">
						<div className="col-md-12 blog-main">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default MainContent;

