import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Handles the Routing of the application

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Link to={`/`}  >Root</Link>&nbsp;
            <Link to={`/work`}  >Work</Link>&nbsp;
            <Link to={`/about`}  >About</Link>&nbsp;
            <Link to={`/contact`}  >Contact</Link>&nbsp;
            <Link to={`/work/league`}  >League</Link>&nbsp;

            <Route exact path="/" render={() => <div>You're at exactly the /</div> } />
            {/* <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
