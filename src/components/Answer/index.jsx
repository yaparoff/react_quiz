import React, { Component } from 'react';

import './answer.scss';

export class Answer extends Component {

  render() {

    const { 
      onAnswerSelect,
      value,
      checked,
      label
    } = this.props;

    return (
      <label className="radio">
        {label}
        <input 
          onChange={ onAnswerSelect }
          type="radio"
          name='answer'
          value={value}
          checked={checked}
        />
        <span className="checkmark"></span>
      </label>
    )
  }
}
