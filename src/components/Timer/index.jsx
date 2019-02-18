import React, { Component } from 'react';

import './timer.scss';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 4 * 60,
      increment: 1
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  transform(num) {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  tick() {
    this.setState({
      counter: this.state.counter - 1
    });

    if (this.state.counter === 0) {
      this.componentWillUnmount();
    }
  }


  render() {
    return (
      <div className="timer">
        { this.transform(Math.floor(this.state.counter / 60)) }
        :
        { this.transform(this.state.counter % 60) }
      </div>
    )
  }
}