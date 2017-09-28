import React, { Component } from 'react';
import logo from './assets/logo.svg';
import ChartContainer from './containers/ChartContainer'
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chartie</h1>
        </header>
        <ChartContainer />
      </div>
    );
  }
}

export default App;
