import React, { Component } from 'react';
import logo from './images/blackbooks.png';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" />
        <div className="jumbo-wrapper">
          <h2>Welcome to Black Books</h2>
        </div>
      </div>
    );
  }
}

export default App;
