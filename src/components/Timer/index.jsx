import React, { Component } from 'react';

import './timer.scss';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 4 * 1
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
    if (!this.props.isOver) {
      this.setState({
        counter: this.state.counter - 1
      });
    }

    if (this.state.counter === 0 || this.props.isOver) {
      this.componentWillUnmount();
    }
  }


  render() {
    const { isOver } = this.props;
    const { counter } = this.state;

    return (
      <div>
        { !isOver &&
          <div className="timer">
            {this.transform(Math.floor(counter / 60))}
            :
            {this.transform(counter % 60)}
          </div>
        }
      </div>
    )
  }
}
