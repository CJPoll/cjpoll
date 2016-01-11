import React from 'react';

const MainContent = React.createClass({
	render() {
		return (
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
		);
	}
});

export default MainContent;

