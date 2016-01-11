import React from 'react';

const FontAwesome = React.createClass({
	render() {
		const type = this.props.type;
		const classname = `fa fa-${type}`;

		return (
			<i className={classname}></i>
		);
	}
});

export default FontAwesome;

