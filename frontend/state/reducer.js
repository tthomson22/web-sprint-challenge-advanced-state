// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { 
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  RESET_FORM,
  INPUT_CHANGE,
  SET_INFO_MESSAGE,
  SET_SELECTED_ANSWER 
} from './action-types'

export const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      if(state === 5){
        return state = 0
      }
      return state + 1
    case MOVE_COUNTERCLOCKWISE:
      if(state === 0){
        return state = 5
      }
      return state - 1
    default:
      return state = 0
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE:
      return action.payload
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return action.payload
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return { ...state, ...action.payload }
    case RESET_FORM:
      return { ...initialFormState }
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
