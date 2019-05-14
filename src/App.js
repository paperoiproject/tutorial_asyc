import React, { Component } from 'react';
import './App.css';

import AppChannel from './AppContainers/AppChannel.js';
import ViewMenuBar from './ViewContainers/ViewMenuBar.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ViewMenuBar />
        <AppChannel />
      </div>
    );
  }
}

export default App;
