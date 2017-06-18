import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './images/blackbooks.png';
import Home from './pages/Home';
import Library from './pages/Library';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <div>
              <Link to="/library">Library</Link>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/library" component={Library} />
        </div>
      </Router>
    );
  }
}

export default App;
