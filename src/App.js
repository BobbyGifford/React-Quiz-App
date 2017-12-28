import React, { Component } from "react";
import "./App.css";

import BaseQuiz from "./containers/BaseQuiz";

class App extends Component {
  state = {
    completed: null
  };

  setCompletion() {
    console.log("done");
    this.setState({
      completed: (
        <div>
          <p className="lead">prize goes here</p>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="App">
        <BaseQuiz onFinished={this.setCompletion.bind(this)} />
        {this.state.completed}
      </div>
    );
  }
}

export default App;
