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
import { withRouter } from "react-router-dom";

class Navbar extends Component {
	onChange = (e, value) => {
		e.preventDefault();
		switch (value) {
			case "/about":
				this.props.history.push("/about");
				return this.props.setFirstSlide();
			case "/portfolio":
				this.props.history.push("/portfolio");
				return this.props.setSecondSlide();
			case "/contact":
				this.props.history.push("/contact");
				return this.props.setThirdSlide();
			default:
				this.props.history.push("/about");
				return this.props.setFirstSlide();
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
								value={this.props.location.pathname}
								onChange={(e, value) => {
									this.onChange(e, value);
								}}
							>
								<BottomNavigationAction
									icon={<PersonIcon />}
									label="About Me"
									value="/about"
								/>
								<BottomNavigationAction
									icon={<LibraryBooksIcon />}
									label="Portfolio"
									value="/portfolio"
								/>
								<BottomNavigationAction
									icon={<ContactMailIcon />}
									label="Contact Me"
									value="/contact"
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
export default withRouter(
	connect(
		mapStateToProps,
		{ setFirstSlide, setSecondSlide, setThirdSlide }
	)(Navbar)
);
