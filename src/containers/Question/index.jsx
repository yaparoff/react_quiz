import React, { Component } from 'react';

import { Answer } from '../../components/Answer';
import { Title } from '../../components/Title';
import './style.css';

export class Question extends Component {

  state = {
    isNextButtonVisible: false,
    activeQuestion: 1,
    data: [
      {
        id: 1,
        title: 'Вопрос 1',
        isPrevButtonVisible: false,
        answers: [
          {
            id: 'option1',
            label: 'ответ 1',
          },
          {
            id: 'option2',
            label: 'ответ 2',
          },
          {
            id: 'option3',
            label: 'ответ 3',
          }
        ]
      },
      {
        id: 2,
        title: 'Вопрос 2',
        isPrevButtonVisible: true,
        answers: [
          {
            value: 'option1',
            label: 'ответ 4',
          },
          {
            value: 'option2',
            label: 'ответ 5',
          },
          {
            value: 'option3',
            label: 'ответ 6',
          }
        ]
      },
      {
        id: 3,
        title: 'Вопрос 3',
        isPrevButtonVisible: true,
        answers: [
          {
            value: 'option1',
            label: 'ответ 7',
          },
          {
            value: 'option2',
            label: 'ответ 8',
          },
          {
            value: 'option3',
            label: 'ответ 9',
          }
        ]
      },
    ]
  };

  handleNextClick = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      isNextButtonVisible: false
    })
  };

  handlePrevClick = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion - 1
    })
  };

  handleAnswerSelect = () => {
    this.setState({
      isNextButtonVisible: true
    })
  };

  render() {

    const { data, activeQuestion, isNextButtonVisible } = this.state;

    return (
      <div className="content">
        {data.map( question => activeQuestion === question.id &&
          <div key={ question.id }>
            <Title
              text={ question.title }
            />

            <div className="content__list">
              { question.answers.map(answer =>
                <Answer
                  key={answer.value}
                  label={answer.label}
                  onAnswerSelect={this.handleAnswerSelect}
                />
              )}
            </div>

            <div className="content__ctrls">
              { question.isPrevButtonVisible &&
                <button className="btn btn--back" onClick={this.handlePrevClick}>Назад</button>
              }
              {isNextButtonVisible &&
                <button className="btn" onClick={this.handleNextClick}>Далее</button>
              }
            </div>
          </div>
        )}
      </div>
    )
  }
}
