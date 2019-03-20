const initialState =
  {
    activeQuestion: 1,
    data: [
      {
        id: 1,
        title: 'Вопрос 2256156',
        isNextButtonVisible: false,
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
        isNextButtonVisible: false,
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
        isNextButtonVisible: false,
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
      }
    ]
  }

;

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'NEXT_BTN_VISIBLE':
      const currentQuestionNumber = state.activeQuestion - 1;
      const currentQuestion = state.data[currentQuestionNumber];
      return {
        ...state,
        ...currentQuestion.isNextButtonVisible = true,
        ...currentQuestion.checkedAnswer = action.payload
      };

    case 'GO_TO_NEXT_QUESTION':
      return {
        ...state,
        ...state.activeQuestion++
      };

    case 'GO_TO_PREV_QUESTION':
      return {
        ...state,
        ...state.activeQuestion--
      };
    default:
      return state;
  }
};

export default reducer;
