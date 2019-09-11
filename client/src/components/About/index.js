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
	Zoom,
	Slide,
	Card,
	CardMedia,
	CardContent
} from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import GestureIcon from "@material-ui/icons/Gesture";
import MovieIcon from "@material-ui/icons/Movie";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setSecondSlide } from "../../actions/slidesActions";
import image from "../../pages/assets/images/bio.jpg";
import { typography } from "@material-ui/system";

class About extends Component {
	state = {
		loaded: false,
		skills: false,
		mediaList: [],
		mediaItemsRendered: 0,
		webDevList: [],
		webItemsRendered: 0,
		toggleHover: false
	};

	componentDidMount() {
		console.log("true");
		console.log(this.state.webDevList);
		this.setState({
			loaded: true
		});
		setTimeout(() => {
			this.setState({
				skills: true
			});
		}, 1500);
	}

	scheduleNextUpdate() {
		this.timer = setTimeout(this.updateRenderedList, 100);
	}

	updateRenderedList = () => {
		const media = [
			{ name: "Adobe Photoshop", icon: <PhotoIcon /> },
			{ name: "Adobe Illustrator", icon: <GestureIcon /> },
			{
				name: "Adobe Premiere Pro",
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
	afterLoad = (origin, destination, direction) => {
		if (destination.index === 1) {
			this.scheduleNextUpdate();
		}
	};

	render() {
		const anchors = ["About Me", "My Skills"];

		return (
			<ReactFullpage
				licenseKey={null} //will buy license when complete
				navigation
				navigationTooltips={anchors}
				scrollOverflow={true}
				responsiveHeight={100}
				sectionsColor={["transparent", "transparent"]}
				afterLoad={this.afterLoad.bind(this)}
				render={({ state, fullpageApi }) => {
					return (
						<Container fixed id="about" id="fullpage-wrapper">
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
									className="section section1"
								>
									<Box mb={10}>
										<Grid
											container
											direction="row"
											justify="center"
											alignItems="center"
										>
											<Grid item md={12}>
												<Paper elevation={0.5}>
													<Typography
														variant="h4"
														align="center"
													>
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
											<Grid
												container
												item
												lg={6}
												md={6}
												sm={12}
												xs={12}
												justify="center"
												alignItems="center"
											>
												<img id="avatar" src={image} />
											</Grid>
											<Grid
												item
												lg={6}
												md={6}
												sm={12}
												xs={12}
											>
												<Paper elevation={0.5}>
													<Typography
														variant="body1"
														align="left"
													>
														I am a full-stack web
														developer that is always
														interested in learning
														something new. I am
														currently proficient in
														JavaScript, however, I
														am familiar with C++ and
														Java. As a full-stack
														web developer, I am
														capable of creating MERN
														stack applications. In
														fact, this portfolio is
														using MongoDB,
														Express.js, React.js,
														and Node.js. As a
														front-end developer, I
														like to keep the UI/UX
														dynamic with animations.
														As a back-end developer,
														I prefer to use MongoDB
														as a database and
														Node.js as a run-time
														enviroment. Other than a
														web developer, I am also
														a cinematographer and an
														illustrator. I am
														proficient with Adobe
														Premiere Pro and Adobe
														Illustrator. If you have
														any questions, feel free
														to contact me!
													</Typography>
												</Paper>
											</Grid>
										</Grid>
									</Box>
									<Grid
										container
										direction="row"
										justify="center"
										alignItems="center"
									>
										<Slide
											direction="up"
											in={this.state.skills}
										>
											<Button
												variant="outlined"
												onClick={() =>
													fullpageApi.moveSectionDown()
												}
											>
												<Grid container>
													<Grid
														container
														direction="row"
														justify="center"
														alignItems="center"
													>
														<div
															style={{
																height: "10px"
															}}
														>
															My Skills
														</div>
													</Grid>
													<Grid
														container
														direction="row"
														justify="center"
														alignItems="center"
													>
														<KeyboardArrowDownIcon
															style={{
																fontSize: 28
															}}
														/>
													</Grid>
												</Grid>
											</Button>
										</Slide>
									</Grid>
								</Grid>

								<div className="section section 2">
									<Grid
										container
										direction="row"
										justify="center"
										alignItems="center"
									>
										<Box mb={3}>
											<Grid item md={12}>
												<Typography
													id="skills"
													variant="h4"
													align="center"
												>
													My Skills
												</Typography>
											</Grid>
										</Box>
									</Grid>

									<Grid
										container
										direction="row"
										justify="space-evenly"
										spacing={2}
									>
										<Grid
											container
											item
											md={4}
											sm={6}
											xs={4}
											direction="column"
										>
											<div className="listSkills">
												<Typography align="center">
													<FontAwesomeIcon
														icon={faPhotoVideo}
														size="4x"
													/>
												</Typography>
												<Typography
													variant="h6"
													align="center"
												>
													Media
												</Typography>
												<Divider variant="middle" />
												<Grid
													container
													direction="row"
													justify="center"
												>
													<Grid
														item
														lg={7}
														md={12}
														sm={7}
														xs={9}
													>
														<List
															dense={true}
															className="list"
														>
															{this.state.mediaList.map(
																(item, i) => {
																	return (
																		<Zoom
																			in={
																				true
																			}
																			key={
																				i
																			}
																		>
																			<ListItem>
																				<ListItemAvatar>
																					{
																						item.icon
																					}
																				</ListItemAvatar>
																				<ListItemText class="listItem">
																					<Typography align="center">
																						{
																							item.name
																						}
																					</Typography>
																				</ListItemText>
																			</ListItem>
																		</Zoom>
																	);
																}
															)}
														</List>
													</Grid>
												</Grid>
											</div>
										</Grid>
										<Grid
											container
											item
											md={4}
											sm={6}
											xs={4}
											direction="column"
										>
											<div className="listSkills">
												<Typography align="center">
													<FontAwesomeIcon
														icon={faFileCode}
														size="4x"
													/>
												</Typography>
												<Typography
													variant="h6"
													align="center"
												>
													Web Development
												</Typography>
												<Divider variant="middle" />
												<Box mb={10}>
													<Grid
														container
														direction="row"
														justify="center"
														className="list"
													>
														<Grid
															item
															lg={7}
															md={7}
															xs={7}
														>
															<List dense={true}>
																{this.state.webDevList.map(
																	(
																		item,
																		i
																	) => {
																		return (
																			<Zoom
																				in={
																					true
																				}
																				key={
																					i
																				}
																			>
																				<ListItem>
																					<ListItemAvatar>
																						{
																							item.icon
																						}
																					</ListItemAvatar>
																					<ListItemText>
																						<Typography align="center">
																							{
																								item.name
																							}
																						</Typography>
																					</ListItemText>
																				</ListItem>
																			</Zoom>
																		);
																	}
																)}
															</List>
														</Grid>
													</Grid>
												</Box>
											</div>
										</Grid>
									</Grid>
								</div>
							</Grid>
						</Container>
					);
				}}
			/>
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
