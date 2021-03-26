import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					{/* <Nav /> */}
					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/contact" component={Contact} />
						{/* <Route component={NoMatch} /> */}
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
