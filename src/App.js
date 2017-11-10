import React, { Component } from 'react';
import './App.css';

import BaseQuiz from './containers/BaseQuiz'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseQuiz />
      </div>
    );
  }
}

export default App;
