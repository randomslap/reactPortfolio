import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
	Container,
	Grid,
	Button,
	AppBar,
	Toolbar,
	BottomNavigation,
	BottomNavigationAction
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { connect } from "react-redux";
import {
	setFirstSlide,
	setSecondSlide,
	setThirdSlide
} from "../../actions/slidesActions";

class Navbar extends Component {
	onChange = (e, value) => {
		e.preventDefault();
		switch (value) {
			case 1:
				return this.props.setFirstSlide();
			case 2:
				return this.props.setSecondSlide();
			case 3:
				return this.props.setThirdSlide();
			default:
				return null;
		}
	};
	render() {
		return (
			<AppBar position="static" color="default">
				<Toolbar>
					<Grid container direction="row" justify="center">
						<Grid item sm={12} md={12} lg={12}>
							<BottomNavigation
								showLabels
								value={this.props.slide.index}
								onChange={(e, value) => {
									this.onChange(e, value);
								}}
							>
								<BottomNavigationAction
									icon={<PersonIcon />}
									label="About Me"
									value={1}
								/>
								<BottomNavigationAction
									icon={<LibraryBooksIcon />}
									label="Portfolio"
									value={2}
								/>
								<BottomNavigationAction
									icon={<ContactMailIcon />}
									label="Contact Me"
									value={3}
								/>
							</BottomNavigation>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}

const mapStateToProps = state => ({
	slide: state.index
});
export default connect(
	mapStateToProps,
	{ setFirstSlide, setSecondSlide, setThirdSlide }
)(Navbar);
