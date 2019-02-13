import React, { Component } from 'react';

import { Question } from '../Question';
import './app.scss';


export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Quiz</h1>
        <Question/>
      </div>
    )
  }
}


