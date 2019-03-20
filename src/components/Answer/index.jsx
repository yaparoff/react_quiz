import React, { Component } from 'react';
import './answer.scss';

export default class Answer extends Component {

  render() {

    const {
      onChangeVisibleBtn,
      value,
      label
    } = this.props;

    return (

      <label className="radio">

        {label}
        <input 
          onChange={ onChangeVisibleBtn }
          type="radio"
          name='answer'
          value={ value }
        />
        <span className="checkmark"></span>
      </label>
    )
  }
}
