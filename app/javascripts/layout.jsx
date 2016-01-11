import React from 'react';
import AppHeader from 'app/javascripts/components/appheader';
import MainContent from 'app/javascripts/components/mainContent';
import Footer from 'app/javascripts/components/footer';



const Layout = React.createClass({

	render() {
		return (
			<div>
				<AppHeader />

				<MainContent>
					{this.props.children}
				</MainContent>

				<Footer />
			</div>
		);
	}
});

export default Layout;
