import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Wheel(props) {
  const {moveClockwise, moveCounterClockwise, wheel} = props

  const clockwiseClick = (evt) => {
    const {value} = evt.target
    moveClockwise(value)
  }

  const counterClockwiseClick = (evt) => {
    const {value} = evt.target
    moveCounterClockwise(value)
  }

  const activeCheck = (number) => {
    if (wheel === number) {
      return 'cog active'
    } else if (number === wheel) {
      return 'cog active'
    }
    return 'cog'
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={activeCheck(0)} style={{ "--i": 0 }}>{activeCheck(0) === 'cog active' ? 'B' : ''}</div>
        <div className={activeCheck(1)} style={{ "--i": 1 }}>{activeCheck(1) === 'cog active' ? 'B' : ''}</div>
        <div className={activeCheck(2)} style={{ "--i": 2 }}>{activeCheck(2) === 'cog active' ? 'B' : ''}</div>
        <div className={activeCheck(3)} style={{ "--i": 3 }}>{activeCheck(3) === 'cog active' ? 'B' : ''}</div>
        <div className={activeCheck(4)} style={{ "--i": 4 }}>{activeCheck(4) === 'cog active' ? 'B' : ''}</div>
        <div className={activeCheck(5)} style={{ "--i": 5 }}>{activeCheck(5) === 'cog active' ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={counterClockwiseClick} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={clockwiseClick} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect((state) => state, actionCreators)(Wheel)