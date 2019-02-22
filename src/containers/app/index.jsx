import React, { Component } from 'react';

import { Question } from '../Question';
import { Timer } from '../../components/Timer';
import './app.scss';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testIsOver: false,
    };
  }

  updateState = () => {
    this.setState({
      testIsOver: true
    });
    console.log(this.state.testIsOver);
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Quiz</h1>
        <Question
          isOver={ this.state.testIsOver }
          updateState={ this.updateState }
        />
        <Timer
          isOver={ this.state.testIsOver }
          updateState={ this.updateState }
        />
      </div>
    )
  }
}


