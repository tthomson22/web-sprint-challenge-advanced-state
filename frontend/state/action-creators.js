import axios from 'axios'
import { 
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE, 
  RESET_FORM, 
  SET_INFO_MESSAGE, 
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER,
} from "./action-types"

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return{type: MOVE_CLOCKWISE}
}

export function moveCounterClockwise() {
  return{type: MOVE_COUNTERCLOCKWISE}
}

export function selectAnswer(id) {
  return{type: SET_SELECTED_ANSWER, payload: id}
}

export function setMessage(message) {
  return{type: SET_INFO_MESSAGE, payload: message}
}

export function setQuiz(data) {
  return {type: SET_QUIZ_INTO_STATE, payload: data}
}

export function inputChange(change) {
  return {type: INPUT_CHANGE, payload: change}
}

export function resetForm() {
  return {type: RESET_FORM}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        console.log(res.data)
        dispatch(setQuiz(res.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}
export function postAnswer({quiz_id, answer_id}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id, answer_id})
      .then(res => {
        dispatch(
          setMessage(res.data.message),
          setQuiz(null),
          selectAnswer(null),
          fetchQuiz(),
        )
      })
      .catch(err => {
        console.error(err)
      })
  }
}
export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/next', {question_text, true_answer_text, false_answer_text})
      .then(res => {
        dispatch(
          setMessage(`Congrats: "${res.data.question}" is a great question`),
          resetForm()
        )
      })
      .catch(err => {
        console.err(err)
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
