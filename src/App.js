import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, hellooooooo</h2>
        </div>
        <div>
          <h3>Find cool stuff</h3>
        </div>
        <Button onClick={this.clicked} >Search</Button>
      </div>
    );
  }

  clicked() {alert("Found!");}
}

export default App;
