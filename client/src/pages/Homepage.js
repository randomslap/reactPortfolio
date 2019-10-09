import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Collapse, Slide, Fade, Zoom } from "@material-ui/core";
import "./style.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import API from "../utils/API";
import { callProjects } from "../actions/apiActions";

class Home extends Component {
	state = {
		navbar: false,
		index: this.props.slide.index,
		slide1: true,
		slide2: false
	};
	componentDidMount() {
		console.log(this.props);
		this.setState({
			index: this.props.slide.index
		});
		API.getAllProjects().then(res => {
			console.log(res);
			return this.props.callProjects(res.data);
		});
	}
	componentDidUpdate() {
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
				<Slide
					in={this.props.location.pathname !== "/"}
					direction="down"
				>
					<div>
						<Navbar />
					</div>
				</Slide>
				<Fade
					in={this.props.location.pathname === "/"}
					timeout={{ enter: 300, exit: 300 }}
					mountOnEnter
					unmountOnExit
				>
					<div>
						<Intro />
					</div>
				</Fade>
				<Zoom
					in={
						this.props.location.pathname === "/portfolio"
							? true
							: false
					}
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
					in={
						this.props.location.pathname === "/about" ? true : false
					}
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
				<Zoom
					in={
						this.props.location.pathname === "/contact"
							? true
							: false
					}
					timeout={{ enter: 500, exit: 100 }}
					style={{
						transitionDelay: !this.state.navbar ? "500ms" : "0ms"
					}}
					mountOnEnter
					unmountOnExit
				>
					<div>
						<Contact />
					</div>
				</Zoom>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.index
});
export default withRouter(
	connect(
		mapStateToProps,
		{
			callProjects
		}
	)(Home)
);
