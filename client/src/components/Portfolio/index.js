import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Grid, Button, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { setSecondSlide } from "../../actions/slidesActions";


class Portfolio extends Component {
	render() {
		return (
			<Container fixed id="about">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					
				>
					<Grid item md={3}>
						<Paper>Hello</Paper>
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
