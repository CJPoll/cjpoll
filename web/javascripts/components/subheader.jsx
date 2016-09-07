import React from 'react';
import BreadCrumb from 'web/javascripts/components/breadCrumb';
import SearchBox from 'web/javascripts/components/searchBox';

const SubHeader = React.createClass({
	render() {
		return (
			<div className="widewrapper subheader">
				<div className="container">
					<BreadCrumb />
					<SearchBox />
				</div>
			</div>
		);
	}
});

export default SubHeader;

