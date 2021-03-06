import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import {
	Container,
	Grid,
	Button,
	Paper,
	Fade,
	Snackbar
} from "@material-ui/core";
import { connect } from "react-redux";
import { setFirstSlide } from "../../actions/slidesActions";
import anime from "animejs/lib/anime.es.js";

class Intro extends Component {
	constructor(props) {
		super(props);
		this.selector1 = React.createRef();
		this.selector2 = React.createRef();
		this.selector3 = React.createRef();
		this.state = {
			index: this.props.slide.index,
			loaded: false,
			snackbar: true
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				snackbar: false
			});
		}, 10500);
		console.log(this.props.slide.index);
		const node = ReactDOM.findDOMNode(this);
		let textWrapper1 = node.querySelector(".ml11 .letters");
		let textWrapper3 = node.querySelector(".ml11 .name");
		textWrapper1.innerHTML = textWrapper1.textContent
			.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
			.replace(",", "<span class='letter'>$&</span>");
		textWrapper3.innerHTML = textWrapper3.textContent.replace(
			/([^\x00-\x80]|\w)/g,
			"<span class='letter name'><b>$&</b></span>"
		);

		let textWrapper2 = node.querySelector(".ml12");
		textWrapper2.innerHTML = textWrapper2.textContent
			.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
			.replace("-", "<span class='letter'>$&</span>");
		anime
			.timeline({ loop: false })
			.add({
				targets: ".ml11 .line",
				scaleY: [0, 1],
				opacity: [0.5, 1],
				easing: "easeOutExpo",
				duration: 700,
				delay: 500
			})
			.add({
				targets: ".ml11 .line",
				translateX: [0, 510],
				easing: "easeOutExpo",
				duration: 600,
				delay: -400
			})
			.add(
				{
					targets: ".ml11 .letter",
					opacity: [0, 1],
					easing: "easeOutExpo",
					duration: 1050,
					offset: "-=0",
					delay: function(el, i) {
						return 25 * (i + 2);
					}
				},
				"-=777"
			)
			.add({
				targets: ".line",
				scaleY: [1, 0],
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 0
			});
		anime.timeline({ loop: false }).add({
			targets: ".ml12 .letter",
			translateX: [40, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutExpo",
			duration: 1200,
			delay: function(el, i) {
				return 1750 + 30 * i;
			}
		});
		setTimeout(() => {
			this.setState({
				loaded: true
			});
		}, 3000);
	}

	onClick = () => {
		console.log(this.props.slide.index);
		this.props.history.push("/about");
		this.props.setFirstSlide();
	};
	render() {
		return (
			<div>
				<Container maxWidth="sm" id="intro">
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item md={12}>
							<h1 class="ml11">
								<span class="text-wrapper">
									<span class="line line1" />
									<span ref={this.selector1} class="letters">
										Hi, my name is{" "}
									</span>
									<span ref={this.selector3} class="name">
										Kent Okazaki
									</span>
								</span>
							</h1>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item md={12}>
							<h2 class="ml12" ref={this.selector2}>
								Full-Stack Web Developer
							</h2>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid
							container
							item
							md={12}
							lg={12}
							xl={12}
							justify="center"
							alignItems="center"
						>
							<Fade
								in={this.state.loaded}
								timeout={{ enter: 250 }}
							>
								<Button
									id="introBtn"
									variant="outlined"
									offset={500}
									onClick={this.onClick}
								>
									ABOUT ME
								</Button>
							</Fade>
						</Grid>
					</Grid>
				</Container>
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					message={
						<span>
							This site is not fully mobile responsive yet nor
							complete. I am doing my best to complete it as soon
							as I can!
						</span>
					}
					open={this.state.snackbar}
				/>
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
		{ setFirstSlide }
	)(Intro)
);
