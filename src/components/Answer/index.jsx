import React, { Component } from 'react';
import './answer.scss';

export default class Answer extends Component {

  render() {

    const {
      onChangeVisibleBtn,
      value,
      label,
      checked
    } = this.props;

    return (

      <label className="radio">

        {label}
        <input 
          onChange={ onChangeVisibleBtn }
          type="radio"
          name='answer'
          value={ value }
          checked={ checked }
        />
        <span className="checkmark"></span>
      </label>
    )
  }
}
