import React from 'react';

const HomePage = React.createClass({
	render() {
		return (
			<div>
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

				<p> I'm currently a software engineer at <a href="http://nuvi.com">Nuvi</a>, a social media analytics company. I'm on the platform team, working with others to scale our product to handle huge amounts of incoming data from social networks.</p>
			</div>
		);
	}
});

export default HomePage;

