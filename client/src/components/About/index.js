import React, { Component } from "react";
import {
	Container,
	Grid,
	Button,
	Paper,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListItemIcon,
	Box,
	Slide
} from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import GestureIcon from "@material-ui/icons/Gesture";
import MovieIcon from "@material-ui/icons/Movie";
import {
	faPhotoVideo,
	faCube,
	faFileCode,
	faDatabase,
	faLeaf,
	faSyncAlt,
	faCodeBranch,
	faKey,
	faPassport,
	faLock
} from "@fortawesome/free-solid-svg-icons";
import VisibilitySensor from "react-visibility-sensor";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setSecondSlide } from "../../actions/slidesActions";

class About extends Component {
	state = {
		loaded: false,
		col: false,
		mediaList: [],
		mediaItemsRendered: 0,
		webDevList: [],
		webItemsRendered: 0
	};

	getInitialState() {
		return {
			loaded: false,
			col: false,
			webDevList: [],
			rendered: 0
		};
	}

	componentDidMount() {
		console.log("true");
		console.log(this.state.webDevList);
		this.setState({
			loaded: true
		});
		setTimeout(() => {
			this.setState({
				col: true
			});
		}, 3000);
		setTimeout(() => {
			this.scheduleNextUpdate();
		}, 1000);
	}

	scheduleNextUpdate() {
		this.timer = setTimeout(this.updateRenderedList, 100);
	}

	updateRenderedList = () => {
		const media = [
			{ name: "Adobe Photoshop", icon: <PhotoIcon /> },
			{ name: "Adobe Illustrator", icon: <GestureIcon /> },
			{
				name: "Adobe Premiere",
				icon: <MovieIcon />
			},
			{
				name: "MAXON Cinema 4D",
				icon: <FontAwesomeIcon icon={faCube} size="lg" />
			}
		];
		const webdev = [
			{
				name: "HTML5",
				icon: <FontAwesomeIcon icon={["fab", "html5"]} size="lg" />
			},
			{
				name: "CSS3",
				icon: <FontAwesomeIcon icon={["fab", "css3-alt"]} size="lg" />
			},
			{
				name: "JavaScript",
				icon: <FontAwesomeIcon icon={["fab", "js"]} size="lg" />
			},
			{
				name: "Java",
				icon: <FontAwesomeIcon icon={["fab", "java"]} size="lg" />
			},
			{
				name: "C++",
				icon: <FontAwesomeIcon icon={faCodeBranch} size="lg" />
			},
			{
				name: "Node.js",
				icon: <FontAwesomeIcon icon={["fab", "node"]} size="lg" />
			},
			{
				name: "Express.js",
				icon: <FontAwesomeIcon icon={["fab", "node-js"]} size="lg" />
			},
			{
				name: "React.js/Redux",
				icon: <FontAwesomeIcon icon={["fab", "react"]} size="lg" />
			},
			{
				name: "MySQL/Sequelize",
				icon: <FontAwesomeIcon icon={faDatabase} size="lg" />
			},
			{
				name: "MongoDB/Mongoose",
				icon: <FontAwesomeIcon icon={faLeaf} size="1x" />
			},
			{
				name: "AXIOS/AJAX",
				icon: <FontAwesomeIcon icon={faSyncAlt} size="1x" />
			},
			{
				name: "JWT",
				icon: <FontAwesomeIcon icon={faKey} size="1x" />
			},
			{
				name: "Passport.js",
				icon: <FontAwesomeIcon icon={faPassport} size="1x" />
			}
		];
		const webItemsRendered = this.state.webItemsRendered;
		const mediaItemsRendered = this.state.mediaItemsRendered;
		const updateWebState = {
			webDevList: this.state.webDevList.concat(
				webdev[this.state.webItemsRendered]
			),
			webItemsRendered: webItemsRendered + 1
		};
		const updateMediaState = {
			mediaList: this.state.mediaList.concat(
				media[this.state.mediaItemsRendered]
			),
			mediaItemsRendered: mediaItemsRendered + 1
		};
		if (updateWebState.webItemsRendered <= webdev.length) {
			this.setState(updateWebState);
		}
		if (updateMediaState.mediaItemsRendered <= media.length) {
			this.setState(updateMediaState);
		}
		if (
			updateWebState.webItemsRendered < webdev.length ||
			updateMediaState.mediaItemsRendered < media.length
		) {
			this.scheduleNextUpdate();
		}
	};

	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	render() {
		return (
			<Container fixed id="about">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
						id="main"
					>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							<Grid item md={12}>
								<Paper elevation={0.5}>
									<Typography variant="h4" align="center">
										About Me
									</Typography>
								</Paper>
							</Grid>
						</Grid>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							<Grid item md={12}>
								<Paper elevation={0.5}>
									<Typography variant="body1" align="left">
										I am a full-stack web developer that is
										always interested in learning something
										new. I am currently proficient in
										JavaScript, however, I am familiar with
										C++ and Java. My
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
					<Box mb={4} mt={100}>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							<Grid item md={12}>
								<Typography
									id="skills"
									variant="h4"
									align="center"
								>
									My Skills
								</Typography>
							</Grid>
						</Grid>
					</Box>

					<Grid
						container
						direction="row"
						justify="space-evenly"
						spacing={2}
					>
						<Grid container item md={4} xs={12} direction="column">
							<Typography align="center">
								<FontAwesomeIcon
									icon={faPhotoVideo}
									size="4x"
								/>
							</Typography>
							<Typography variant="h6" align="center">
								Media
							</Typography>
							<Divider variant="middle" />
							<Grid container direction="row" justify="center">
								<Grid item lg={7} md={12} sm={7} xs={9}>
									<List dense={true}>
										{this.state.mediaList.map((item, i) => {
											return (
												<Animated
													animationIn="zoomIn"
													animationOut="zoomOut"
													animationInDuration={100}
													animationOutDuration={100}
													isVisible={this.state.col}
													key={i}
												>
													<ListItem>
														<ListItemAvatar>
															{item.icon}
														</ListItemAvatar>
														<ListItemText>
															<Typography align="center">
																{item.name}
															</Typography>
														</ListItemText>
													</ListItem>
												</Animated>
											);
										})}
									</List>
								</Grid>
							</Grid>
						</Grid>
						<Grid container item md={4} xs={12} direction="column">
							<Typography align="center">
								<FontAwesomeIcon icon={faFileCode} size="4x" />
							</Typography>
							<Typography variant="h6" align="center">
								Web Development
							</Typography>
							<Divider variant="middle" />
							<Grid container direction="row" justify="center">
								<Grid item lg={7} md={7} xs={7}>
									<List dense={true}>
										{this.state.webDevList.map(
											(item, i) => {
												return (
													<Animated
														animationIn="zoomIn"
														animationOut="zoomOut"
														animationInDuration={
															100
														}
														animationOutDuration={
															100
														}
														isVisible={
															this.state.col
														}
														key={i}
													>
														<ListItem>
															<ListItemAvatar>
																{item.icon}
															</ListItemAvatar>
															<ListItemText>
																<Typography align="center">
																	{item.name}
																</Typography>
															</ListItemText>
														</ListItem>
													</Animated>
												);
											}
										)}
									</List>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					hello
				</Grid>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.index
});
export default connect(
	mapStateToProps,
	{ setSecondSlide }
)(About);
