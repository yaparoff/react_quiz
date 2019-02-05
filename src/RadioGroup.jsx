import React, { Component } from 'react';
import './node_modules/components/radio/Radio.css';

export class RadioGroup extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <label className="radio">
        {this.props.label}
        <input type="radio" name={this.props.name} value={this.props.value} checked={this.props.checked}/>
        <span className="checkmark"></span>
      </label>
    )
  }
}
