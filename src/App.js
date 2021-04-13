import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="*" component={About} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
