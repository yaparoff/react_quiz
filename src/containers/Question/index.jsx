import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Answer from '../../components/Answer';
import { Title } from '../../components/Title';
import './question.scss';

class Question extends Component {

  handleNextClick = () => {
    if (this.state.activeQuestion === this.state.data.length) {
      this.setState({
        isNextButtonVisible: false
      });
      this.props.finishTest();

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

  changeHandler = (e) => {
    this.props.nextBtnVisible(e.target.getAttribute('value'))
  };

  render() {
    const { isOver, questions, nextBtnVisible } = this.props;


    return (
      <div className="content">
        { !isOver &&

          questions.data.map( question => questions.activeQuestion === question.id &&

          <div key={ question.id }>
            <Title text={ question.title } />
            <div className="content__list">

              { question.answers.map( answer =>

                <Answer
                  key={ answer.value }
                  value={ answer.value }
                  label={ answer.label }
                  onChangeVisibleBtn={ this.changeHandler }
                  // checked={ this.state.selectedOption === answer.value }
                  // checked={
                  //   // question.checkedAnswer == answer.value ? true : false
                  // }
                />
              )}
            </div>

            <div className="content__ctrls">
              { question.isPrevButtonVisible &&
                <button className="btn btn--back" /*onClick={ this.handlePrevClick }*/>Назад</button>
              }
              {( questions.isNextButtonVisible || question.checkedAnswer ) &&
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

function mapStateToProps(state){
  return {
    questions: state
  };
}
const mapDispatchToProps = (dispatch) => {

  const { nextBtnVisible } = bindActionCreators(actions, dispatch);

  return {
    nextBtnVisible
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Question);
