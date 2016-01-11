import React from 'react';
import imageUrl from 'app/javascripts/helpers/imageUrlHelper';

const Layout = React.createClass({

	render() {
		const logoUrl = imageUrl('tales-logo.png');
		return (
			<div>
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
											<a className="dropdown-toggle"
					data-toggle="dropdown"
		   href="#">
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

				<div className="widewrapper main">
					<div className="container">
						<div className="row">
							<div className="col-md-8 blog-main">
								<h1> Cody Poll </h1>
								<p> I'm a full-stack web developer, software engineer, blogger, and contractor. I write about stuff I enjoy, and all opinions are my own. </p>

					<p> I've written software in lots of languages and frameworks.
					Professionally, I've used Erlang, Elixir, Ruby, Javascript, and Java, but languages and frameworks are probably the least
								important thing I could use to describe myself. I try to
								write code so expressively that its intent is immediately
								clear to the reader.  I use code that's battle tested
								and well-maintained by instead of reinventing the wheel.
								</p>

								<p>
								Most importantly, I think that programming is an act of
								self-expression, drawing from creative ideas in the mind
								to create a real-life product that solves problems. Code
								should read like a story, and software needs to be a joy
								to use.
								</p>

								<p> I'm currently a software engineer at Nuvi (building a Learning Management System called <a href="http://www.canvaslms.com/">Canvas</a>)</p>
							</div>
							<aside className="col-md-4 blog-aside">
								<div className="aside-widget">
									<header>
										<h3>A simple widget</h3>
									</header>
									<div className="body">
										that says hi!
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
				{this.props.children}
				<footer>
					<div className="widewrapper footer">
						<div className="container">
							<div className="row">
								<div className="col-md-4 footer-widget">
									<h3> <i className="fa fa-cog"></i>Statistics</h3>

									<span>Even we sometimes lose track of how many articles we actually have here.  This one helps:</span>

									<div className="stats">
										<div className="line">
											<span className="counter">0</span>
											<span className="caption">Articles</span>
										</div>
										<div className="line">
											<span className="counter">0</span>
											<span className="caption">Comments</span>
										</div>
										<div className="line">
											<span className="counter">1</span>
											<span className="caption">Authors</span>
										</div>                    
									</div>
								</div>

								<div className="col-md-4 footer-widget">
									<h3> <i className="fa fa-star"></i> Hall of Fame</h3>
									<ul className="tales-list">
										<li><a href="index.html">Why we Need to Encrypt All Communication</a></li>
										<li><a href="#">Selling is a Function of Design. Not Vice-Versa.</a></li>
										<li><a href="#">It€™s Hard To Come Up With Dummy Titles</a></li>
										<li><a href="#">Why the Internet is Full of Cats</a></li>
										<li><a href="#">Last Made-Up Headline, I Swear!</a></li>
									</ul>
								</div>

								<div className="col-md-4 footer-widget">
									<h3> <i className="fa fa-envelope"></i>Contact Me</h3>

									<span>I'm happy to hear from my readers. Thoughts, feedback, critique - all welcome! Drop me a line:</span>

									<span className="email">
										<a href="#">jimmy@notanactualemail.com</a>, PGP key 0x5AK0BEA1
									</span>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
});

export default Layout;
