import React from 'react';

const BreadCrumb = React.createClass({
	render() {
		return (
			<div className="tales-breadcrumb">
				<a href="#">Tales</a>
				<span className="separator">&#x2F;</span>
				<a href="#">Starter</a>
				<span className="separator">&#x2F;</span>
				<a href="#">Starter Page</a>
			</div>
		);
	}
});

export default BreadCrumb;

