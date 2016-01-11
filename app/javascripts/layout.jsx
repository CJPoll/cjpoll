import React from 'react';
import AppHeader from 'app/javascripts/components/appheader';
import MainContent from 'app/javascripts/components/mainContent';


const Layout = React.createClass({

	render() {
		return (
			<div>
				<AppHeader />

				<MainContent>
					{this.props.children}
				</MainContent>
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
