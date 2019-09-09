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
	CardMedia
} from "@material-ui/core";
import { connect } from "react-redux";
import { setThirdSlide } from "../../actions/slidesActions";

class Contact extends Component {
	render() {
		return (
			<Container fixed>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid
						container
						item
						md={3}
						justify="center"
						alignItems="center"
					>
						
					</Grid>
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
	{ setThirdSlide }
)(Contact);
