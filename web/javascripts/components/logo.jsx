import React from 'react';
import imageUrl from 'web/javascripts/helpers/imageUrlHelper';

const Logo = React.createClass({
	render() {
		const logoUrl = imageUrl('tales-logo.png');

		return (
			<a href="index.html" id="logo">
				{logoUrl}
			</a>
		);
	}
});

export default Logo;
