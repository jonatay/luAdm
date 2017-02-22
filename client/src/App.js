import React, { Component } from 'react';
import logo from './lu-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <h2>luHR</h2>
        </div>
        
      </div>
    );
  }
}

export default App;
