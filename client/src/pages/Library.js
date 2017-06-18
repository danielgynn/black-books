import React, { Component } from 'react';
import axios from 'axios';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: '/api/library',
      pollInterval: 2000
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  loadDataFromServer() {
    axios.get(this.state.url)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
  }

  componentDidMount() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, this.state.pollInterval);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="jumbo-wrapper">
          <h2>Library</h2>
          <p>{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default Library;
