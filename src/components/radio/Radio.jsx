import React, { Component } from 'react';
import './Radio.css';

export class Radio extends Component {
  constructor(props) {
    super(props);
  }

  showButtonNext() {
    console.log('show button')
  }

  render() {
    return (
      <label className="radio" onClick={this.showButtonNext}>
        {this.props.label}
        <input type="radio" name={this.props.name} value={this.props.value} checked={this.props.checked}/>
        <span className="checkmark"></span>
      </label>
    )
  }
}
