import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
	Container,
	Grid,
	Button,
	Paper,
	Typography,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Fade
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setThirdSlide } from "../../actions/slidesActions";

class Contact extends Component {
	state = {
		contact: [],
		contactItemsRendered: 0,
		loaded: false
	};

	componentDidMount() {
		setTimeout(
			this.setState({
				loaded: true
			}),
			2000
		);
		this.scheduleNextUpdate();
	}
	scheduleNextUpdate() {
		this.timer = setTimeout(this.updateRenderList, 100);
	}
	updateRenderList = () => {
		const contactList = [
			{
				type: "Github",
				icon: <FontAwesomeIcon icon={["fab", "github"]} size="lg" />,
				url: "https://github.com/randomslap"
			},
			{
				type: "LinkedIn",
				icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />,
				url: "www.linkedin.com/in/kent-okazaki"
			},
			{
				type: "Email",
				icon: <FontAwesomeIcon icon={faEnvelope} size="lg" />,
				url: "kentokazaki@gmail.com"
			}
		];
		const contactItemsRendered = this.state.contactItemsRendered;
		const updateContactState = {
			contact: this.state.contact.concat(
				contactList[contactItemsRendered]
			),
			contactItemsRendered: contactItemsRendered + 1
		};
		if (updateContactState.contactItemsRendered <= contactList.length) {
			this.setState(updateContactState);
		}
		if (updateContactState.contactItemsRendered < contactList.length) {
			this.scheduleNextUpdate();
		}
	};
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	render() {
		return (
			<Container fixed>
				{this.state.contact.map((item, i) => {
					return (
						<Fade in={this.state.loaded}>
							<Grid
								container
								direction="column"
								justify="center"
								alignItems="center"
								key={i}
							>
								<Grid
									container
									item
									md={12}
									justify="center"
									alignItems="center"
								>
									<a href={item.url}>
										{item.icon}
										<span>{item.type}</span>
									</a>
								</Grid>
							</Grid>
						</Fade>
					);
				})}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.index
});
export default connect(
	mapStateToProps,
	{ setThirdSlide }
)(Contact);
