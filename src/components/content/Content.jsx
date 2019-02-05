import React, { Component } from 'react';
import classNames from 'classnames';
import { Radio } from '../radio/Radio';
import './Content.css';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }



  render() {
    const contentClass = classNames({
      content: true,
      'visible': this.state.visible
    });

    return (
      <div className={ contentClass }>
        <div className="content__title">{this.props.title}</div>
        <div className="radio-group">
          {this.props.answers}
        </div>

        <button className="btn" /*onClick={this.handleClick}*/>Далее</button>
      </div>
    )
  }
}
