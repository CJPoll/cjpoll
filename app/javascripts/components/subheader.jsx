import React from 'react';
import BreadCrumb from 'app/javascripts/components/breadCrumb';


const SubHeader = React.createClass({
	render() {
		return (
			<div className="widewrapper subheader">
				<div className="container">

					<BreadCrumb />

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

