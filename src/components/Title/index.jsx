import React, { Component } from 'react';

import './style.css';

export class Title extends Component {

  render() {

    return (
      <div className="content__title">{this.props.text}</div>
    )
  }
}
