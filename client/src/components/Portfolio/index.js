import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
	Container,
	Grid,
	Button,
	Paper,
	Typography,
	Card,
	Fade,
	CardActions,
	CardContent,
	CardMedia,
	LinearProgress
} from "@material-ui/core";
import { connect } from "react-redux";
import { setSecondSlide } from "../../actions/slidesActions";

class Portfolio extends Component {
	state = {
		projects: [],
		projectsRendered: 0,
		loaded: false
	};
	componentDidMount() {
		console.log(this.props);
		setTimeout(
			this.setState({
				loaded: true
			}),
			5000
		);
		this.scheduleNextUpdate();
	}
	scheduleNextUpdate() {
		this.timer = setTimeout(this.updateRenderList, 100);
	}
	updateRenderList = () => {
		const projectItemsRendered = this.state.projectsRendered;
		const updateProjectsState = {
			projects: this.state.projects.concat(
				this.props.api.projects[this.state.projectsRendered]
			),
			projectsRendered: projectItemsRendered + 1
		};
		if (
			updateProjectsState.projectsRendered <=
			this.props.api.projects.length
		) {
			this.setState(updateProjectsState);
		}
		if (
			updateProjectsState.projectsRendered <
			this.props.api.projects.length
		) {
			this.scheduleNextUpdate();
		}
	};
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	render() {
		return (
			<Container fixed>
				<Grid
					container
					direction="row"
					justify="center"
					spacing={2}
					alignItems="center"
				>
					{this.state.projects.map((project, i) => {
						return (
							<Grid
								container
								item
								lg={3}
								md={4}
								sm={6}
								justify="center"
								alignItems="center"
								key={i}
							>
								<Fade
									in={this.state.loaded}
									timeout={{ enter: 300, exit: 300 }}
									style={{
										transitionDelay: "250ms"
									}}
									mountOnEnter
									unmountOnExit
								>
									<Card>
										<CardMedia
											component="img"
											alt={project.title}
											height="140"
											image={require(`../../pages/assets/images/${project.image}.jpg`)}
											title={project.title}
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
											>
												{project.title}
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												{project.about}
											</Typography>
										</CardContent>
										<span>Progress:</span>
										<LinearProgress
											color="secondary"
											variant="determinate"
											value={project.progress}
										/>
										<span>0</span>
										<span id="progress">100</span>
										<CardActions className="cardActions">
											<Button
												size="small"
												color="primary"
												href={project.github}
												target="_blank"
												className="cardActions"
											>
												Github
											</Button>
											<Button
												size="small"
												color="primary"
												href={project.URL}
												target="_blank"
												className="cardActions"
											>
												Live version
											</Button>
										</CardActions>
									</Card>
								</Fade>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	api: state.api
});
export default connect(
	mapStateToProps,
	{ setSecondSlide }
)(Portfolio);
