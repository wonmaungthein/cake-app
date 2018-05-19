import React, { Component } from 'react';

import './App.css';

import CakesList from './containers/CakesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">YAY CAKES</h1>
        </header>
        <CakesList />
      </div>
    );
  }
}

export default App;
