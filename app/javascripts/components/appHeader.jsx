import React from 'react';
import imageUrl from 'app/javascripts/helpers/imageUrlHelper';

const AppHeader = React.createClass({
	render() {
		const logoUrl = imageUrl('tales-logo.png');
		return (
			<header>
				<div className="widewrapper masthead">
					<div className="container">
						<a href="index.html" id="logo">
							{logoUrl}
						</a>

						<div id="mobile-nav-toggle" className="pull-right">
							<a href="#" data-toggle="collapse" data-target=".tales-nav .navbar-collapse">
								<i className="fa fa-bars"></i>
							</a>
						</div>

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

				<div className="widewrapper subheader">
					<div className="container">
						<div className="tales-breadcrumb">
							<a href="#">Tales</a>
							<span className="separator">&#x2F;</span>
							<a href="#">Starter</a>
							<span className="separator">&#x2F;</span>
							<a href="#">Starter Page</a>
						</div>

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
			</header>
		);
	}
});

export default AppHeader;
