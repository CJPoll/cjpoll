import React from 'react';
import AppHeader from 'app/javascripts/components/appHeader';
import MainContent from 'app/javascripts/components/mainContent';
import MainWindow from 'app/javascripts/components/mainWindow';
import Sidebar from 'app/javascripts/components/sidebar';
import Footer from 'app/javascripts/components/footer';



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
