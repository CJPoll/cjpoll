import React from 'react';

const SearchBox = React.createClass({
	render() {
		return (
			<div className="tales-searchbox">
				<form action="#" method="get" acceptCharset="utf-8">
					<button className="searchbutton" type="submit">
						<i className="fa fa-search"></i>
					</button>
					<input className="searchfield" id="searchbox" type="text" placeholder="Search"/>
				</form>
			</div>
		);
	}
});

export default SearchBox;

