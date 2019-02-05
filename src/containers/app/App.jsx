import React, { Component } from 'react';
import { Container } from '../../components/container/Container';
import './App.css';


export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Quiz</h1>
        <Container/>
      </div>
    )
  }
}


