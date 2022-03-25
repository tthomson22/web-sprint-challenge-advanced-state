import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const {inputChange, form, postQuiz} = props

  const onChange = evt => {
    const {value, id} = evt.target
    const newQuestion = {...form, [id]: value}
    inputChange(newQuestion)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz({
      question_text: form.newQuestion,
      true_answer_text: form.newTrueAnswer,
      false_answer_text: form.newFalseAnswer
    })
  }

  const enableCheck = (type) => type.trim('').length > 0

  const enableSubmit = enableCheck(form.newQuestion) && enableCheck(form.newTrueAnswer) && enableCheck(form.newFalseAnswer)

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={!enableSubmit} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
