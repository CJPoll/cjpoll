import React from 'react';
import MobileNav from 'web/javascripts/components/mobileNav';

const Navbar = React.createClass({
	render() {
		return (
			<div>
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
		);
	}
});

export default Navbar;
