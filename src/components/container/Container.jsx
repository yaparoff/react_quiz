import React, { Component } from 'react';
import { Radio } from '../radio/Radio';
import { Content } from '../content/Content';
import './Container.css';

export class Container extends Component {

  handleClick() {

  }

  render() {
    const containersCollection = [
      {
        id: 1,
        title: 'Вопрос 1',
        answers: [
          {
            value: 'option1',
            label: 'ответ 1',
            name: 'question1'
          },
          {
            value: 'option2',
            label: 'ответ 2',
            name: 'question1'
          },
          {
            value: 'option3',
            label: 'ответ 3',
            name: 'question1'
          }
        ]
      },
      {
        id: 2,
        title: 'Вопрос 2',
        answers: [
          {
            value: 'option1',
            label: 'ответ 4',
            name: 'question2'
          },
          {
            value: 'option2',
            label: 'ответ 5',
            name: 'question2'
          },
          {
            value: 'option3',
            label: 'ответ 6',
            name: 'question2'
          }
        ]
      },
      {
        id: 3,
        title: 'Вопрос 3',
        answers: [
          {
            value: 'option1',
            label: 'ответ 7',
            name: 'question3'
          },
          {
            value: 'option2',
            label: 'ответ 8',
            name: 'question3'
          },
          {
            value: 'option3',
            label: 'ответ 9',
            name: 'question3'
          }
        ]
      },
    ];

    const containers = containersCollection.map((container) =>
      <Content
        key={container.id}
        title={container.title}
        answers={container.answers.map((answer) =>

          <Radio
            key={answer.value}
            label={answer.label}
            name={answer.name}
          />
        )}
      />
    )

    return (
      <div className="container">
        { containers }
      </div>
    )
  }
}
