import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Answer from '../../components/Answer';
import { Title } from '../../components/Title';
import './question.scss';

class Question extends Component {

  changeHandler = (e) => {
    const value = e.target.getAttribute('value');
    this.props.nextBtnVisible(value)
  };

  render() {
    const { isOver, questions, goToNextQuestion, goToPrevQuestion } = this.props;


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
                  checked={
                    question.checkedAnswer === answer.value ? true : false
                  }
                />
              )}
            </div>

            <div className="content__ctrls">
              { question.isPrevButtonVisible &&
                <button
                  className="btn btn--back"
                  onClick={ goToPrevQuestion }
                >Назад</button>
              }
              {( questions.isNextButtonVisible || question.checkedAnswer ) &&
                <button className="btn" onClick={ goToNextQuestion }>Далее</button>
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

  const { nextBtnVisible, goToNextQuestion, goToPrevQuestion } = bindActionCreators(actions, dispatch);

  return {
    nextBtnVisible,
    goToNextQuestion,
    goToPrevQuestion
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Question);
