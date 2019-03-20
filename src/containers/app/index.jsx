import React, { Component } from 'react';

import Question from '../Question';
import { Timer } from '../../components/Timer';
import './app.scss';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testIsOver: false,
    };
  }

  finishTest = () => {
    this.setState({
      testIsOver: true
    });
  };

  render() {

    return (
      <div className="wrapper">
        <h1 className="title">Quiz</h1>

        <Question
          isOver={ this.state.testIsOver }
          finishTest={ this.finishTest }
        />
        <Timer
          isOver={ this.state.testIsOver }
          finishTest={ this.finishTest }
        />
      </div>
    )
  }
}


