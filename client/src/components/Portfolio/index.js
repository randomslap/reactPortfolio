import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Grid, Button, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { setSecondSlide } from "../../actions/slidesActions";

class Portfolio extends Component {
	render() {
		return (
			<Container fixed>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid container item md={3} justify="center" alignItems="center">
						<Paper>
							<Typography>WIP</Typography>
						</Paper>
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
	{ setSecondSlide }
)(Portfolio);
