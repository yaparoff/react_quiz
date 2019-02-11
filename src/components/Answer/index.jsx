import React, { Component } from 'react';

import './style.css';

export class Answer extends Component {

  render() {

    const { onAnswerSelect } = this.props;

    return (
      <label className="radio">
        {this.props.label}
        <input 
          onChange={onAnswerSelect}
          type="radio"
          name='answer'
          value={this.props.value}
          checked={this.props.checked}
        />
        <span className="checkmark"></span>
      </label>
    )
  }
}
