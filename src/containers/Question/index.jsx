import React, { Component } from 'react';

import { Answer } from '../../components/Answer';
import { Title } from '../../components/Title';
import './question.scss';

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNextButtonVisible: false,
      activeQuestion: 1,
      data: [
        {
          id: 1,
          title: 'Вопрос 1',
          isPrevButtonVisible: false,
          checkedAnswer: null,
          answers: [
            {
              value: 'option1',
              label: 'ответ 1',
            },
            {
              value: 'option2',
              label: 'ответ 2',
            },
            {
              value: 'option3',
              label: 'ответ 3',
            }
          ]
        },
        {
          id: 2,
          title: 'Вопрос 2',
          isPrevButtonVisible: true,
          checkedAnswer: null,
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
          checkedAnswer: null,
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
  }


  handleNextClick = () => {
    if (this.state.activeQuestion === this.state.data.length) {
      this.setState({
        isNextButtonVisible: false
      });
      this.props.updateState();

    } else {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        isNextButtonVisible: false
      });
    }
  };

  handlePrevClick = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion - 1
    })
  };

  handleAnswerSelect = (id) => {

    this.setState({
      isNextButtonVisible: true,
      data: this.state.data.map(item => {
        if (this.state.activeQuestion === item.id) {
          item.checkedAnswer = id;
        }
        return item;
      })
    });
  };

  render() {
    const { data, activeQuestion, isNextButtonVisible } = this.state;
    const { isOver } = this.props;

    return (
      <div className="content">
        { !isOver &&
          data.map( question => activeQuestion === question.id &&

          <div key={ question.id }>
            <Title text={ question.title } />
            <div className="content__list">
              { question.answers.map( answer =>

                <Answer
                  key={ answer.value }
                  label={ answer.label }
                  onAnswerSelect={ () => this.handleAnswerSelect(answer.value) }
                  checked={
                    question.checkedAnswer == answer.value ? true : false
                  }
                />
              )}
            </div>

            <div className="content__ctrls">
              { question.isPrevButtonVisible &&
                <button className="btn btn--back" onClick={ this.handlePrevClick }>Назад</button>
              }
              {( isNextButtonVisible || question.checkedAnswer ) &&
                <button className="btn" onClick={ this.handleNextClick }>Далее</button>
              }
            </div>
          </div>
        )}

        { isOver &&
            <h1>Тест окончен</h1>
        }
      </div>
    )
  }
}
