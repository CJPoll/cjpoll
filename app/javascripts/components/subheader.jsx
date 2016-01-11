import React from 'react';
import BreadCrumb from 'app/javascripts/components/breadCrumb';
import SearchBox from 'app/javascripts/components/searchBox';

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

