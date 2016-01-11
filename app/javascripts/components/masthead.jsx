import React from 'react';
import Logo from 'app/javascripts/components/logo';
import MobileNav from 'app/javascripts/components/mobileNav';

const Masthead = React.createClass({
	render() {

		return (
			<div className="widewrapper masthead">
				<div className="container">
					<Logo />

					<MobileNav />

					<nav className="pull-right tales-nav">
						<div className="collapse navbar-collapse">
							<ul className="nav nav-pills navbar-nav">

								<li className="dropdown active">
									<a className="dropdown-toggle" data-toggle="dropdown" href="#">
										Blog
										<b className="caret"></b>
									</a>
									<ul className="dropdown-menu">
										<li><a href="index.html">Blog</a></li>
										<li><a href="blog-detail.html">Blog Detail</a></li>
									</ul>
								</li>
								<li>
									<a href="about.html">About</a>
								</li>
								<li>
									<a href="credits.html">Credits</a>
								</li>                        
							</ul>
						</div>
					</nav>        

				</div>
			</div>
		);
	}
});

export default Masthead;
