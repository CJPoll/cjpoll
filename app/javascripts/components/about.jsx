import React from 'react';

const About = React.createClass({
	render() {
		return (
			<div className="container about">
				{this.props.children}
			</div>
		);
	}
});

export default About;

