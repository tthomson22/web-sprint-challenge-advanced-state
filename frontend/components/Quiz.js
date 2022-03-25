import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Quiz(props) {
  const { fetchQuiz, quiz, selectedAnswer, selectAnswer } = props

  useEffect(() => {
    fetchQuiz()
  },[])

  const click = (id) => {
    selectAnswer(id)
  }

  const selectCheck = (position) => {
    if(selectedAnswer === quiz.answers[position].answer_id){
      return true
    }
    return false
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={selectCheck(0) ? 'answer selected' : 'answer'}>
                {quiz.answers[0].text}
                <button onClick={() => click(quiz.answers[0].answer_id)} >
                  {selectCheck(0) ? 'SELECTED' : 'select'}
                </button>
              </div>

              <div className="answer">
                {quiz.answers[1].text}
                <button onClick={() => click(quiz.answers[1].answer_id)}>
                  {selectCheck(1) ? 'SELECTED' : 'select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect((state) => state, actionCreators)(Quiz)