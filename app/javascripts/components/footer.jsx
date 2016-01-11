import React from 'react';

import Caption from 'app/javascripts/components/caption';
import Counter from 'app/javascripts/components/counter';
import FontAwesome from 'app/javascripts/components/fontAwesome';
import FooterWidget from 'app/javascripts/components/footerWidget';
import Line from 'app/javascripts/components/line';
import Stats from 'app/javascripts/components/stats';
import TalesList from 'app/javascripts/components/talesList';
import Email from 'app/javascripts/components/email';



const Footer = React.createClass({
	render() {
		return (
			<footer>
				<div className="widewrapper footer">
					<div className="container">
						<div className="row">
							<FooterWidget>
								<h3> <i className="fa fa-cog"></i>Statistics</h3>

								<span>Even we sometimes lose track of how many articles we actually have here.  This one helps:</span>

								<Stats>
									<Line>
										<Counter>0</Counter>
										<Caption>Articles</Caption>
									</Line>
									<Line>
										<Counter>0</Counter>
										<Caption>Comments</Caption>
									</Line>
									<Line>
										<Counter>1</Counter>
										<Caption>Authors</Caption>
									</Line>
								</Stats>
							</FooterWidget>

							<FooterWidget>
								<h3> <FontAwesome type='star' /> Hall of Fame</h3>
								<TalesList>
									<li><a href="index.html">Why we Need to Encrypt All Communication</a></li>
									<li><a href="#">Selling is a Function of Design. Not Vice-Versa.</a></li>
									<li><a href="#">It€™s Hard To Come Up With Dummy Titles</a></li>
									<li><a href="#">Why the Internet is Full of Cats</a></li>
									<li><a href="#">Last Made-Up Headline, I Swear!</a></li>
								</TalesList>
							</FooterWidget>

							<FooterWidget>
								<h3> <FontAwesome type='envelope' />Contact Me</h3>

								<span>I'm happy to hear from my readers. Thoughts, feedback, critique - all welcome! Drop me a line:</span>

								<Email>
									<a href="#">jimmy@notanactualemail.com</a>, PGP key 0x5AK0BEA1
								</Email>
							</FooterWidget>
						</div>
					</div>
				</div>
			</footer>
		);
	}
});

export default Footer;

