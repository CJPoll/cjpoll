import React from 'react';

const MainContent = React.createClass({
	render() {
		return (
			<div className="widewrapper main">
				<div className="container">
					<div className="row">
						<div className="col-md-8 blog-main">
							{this.props.children}
						</div>
						<aside className="col-md-4 blog-aside">
							<div className="aside-widget">
								<header>
									<h3>A simple widget</h3>
								</header>
								<div className="body">
									that says hi!
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		);
	}
});

export default MainContent;

