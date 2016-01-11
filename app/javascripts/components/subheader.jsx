import React from 'react';

const SubHeader = React.createClass({
	render() {
		return (
			<div className="widewrapper subheader">
				<div className="container">
					<div className="tales-breadcrumb">
						<a href="#">Tales</a>
						<span className="separator">&#x2F;</span>
						<a href="#">Starter</a>
						<span className="separator">&#x2F;</span>
						<a href="#">Starter Page</a>
					</div>

					<div className="tales-searchbox">
						<form action="#" method="get" acceptCharset="utf-8">
							<button className="searchbutton" type="submit">
								<i className="fa fa-search"></i>
							</button>
							<input className="searchfield" id="searchbox" type="text" placeholder="Search"/>
						</form>
					</div>
				</div>
			</div>
		);
	}
});

export default SubHeader;

