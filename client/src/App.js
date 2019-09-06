import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./pages/Homepage";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

library.add(fab)

export default App;
