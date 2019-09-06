import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse, Slide, Fade, Zoom } from "@material-ui/core";
import "./style.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

class Home extends Component {
	state = {
		navbar: false,
		index: this.props.slide.index,
		slide1: true,
		slide2: false
	};
	componentDidMount() {
		console.log(this.props.slide.index);
		this.setState({
			index: this.props.slide.index
		});
	}
	componentDidUpdate(prevProps, prevState) {
		setTimeout(() => {
			if (this.props.slide.index !== 0) {
				this.setState({
					navbar: true,
					index: this.props.slide.index
				});
			} else {
				this.setState({
					navbar: false
				});
			}
		}, 500);
	}
	render() {
		return (
			<div>
				<Slide in={!this.state.navbar} direction="down">
					<div>
						<Navbar />
					</div>
				</Slide>
				<Fade
					in={this.props.slide.index === 1}
					timeout={{ enter: 300, exit: 300 }}
					mountOnEnter
					unmountOnExit
				>
					<div>
						<Intro />
					</div>
				</Fade>
				<Zoom
					in={this.props.slide.index === 2}
					timeout={{ enter: 500, exit: 100 }}
					style={{
						transitionDelay: !this.state.navbar ? "500ms" : "0ms"
					}}
					mountOnEnter
					unmountOnExit
				>
					<div>
						<Portfolio />
					</div>
				</Zoom>
				<Zoom
					in={this.props.slide.index === 0}
					timeout={{ enter: 500, exit: 100 }}
					style={{
						transitionDelay: !this.state.navbar ? "500ms" : "0ms"
					}}
					mountOnEnter
					unmountOnExit
				>
					<div>
						<About />
					</div>
				</Zoom>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.index
});
export default connect(mapStateToProps)(Home);
