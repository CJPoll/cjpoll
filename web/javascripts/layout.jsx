import React from 'react';
import AppHeader from 'web/javascripts/components/appHeader';
import MainContent from 'web/javascripts/components/mainContent';
import MainWindow from 'web/javascripts/components/mainWindow';
import Sidebar from 'web/javascripts/components/sidebar';
import Footer from 'web/javascripts/components/footer';



const Layout = React.createClass({

	render() {
		return (
			<div>
				<AppHeader />

				<MainWindow>
					<MainContent>
						{this.props.children}
					</MainContent>
					<Sidebar/>
				</MainWindow>

				<Footer />
			</div>
		);
	}
});

export default Layout;
