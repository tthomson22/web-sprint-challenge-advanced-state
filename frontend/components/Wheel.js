import React, { useReducer } from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import reducer, { initialWheelState } from '../state/reducer'

export default function Wheel() {
  const [state, dispatch] = useReducer(reducer, initialWheelState)

  const clockwiseClick = () => {
    dispatch(moveClockwise())
  }

  const counterClockwiseClick = () => {
    dispatch(moveCounterClockwise())
  }

  const activeCheck = (number) => {
    if (state === number) {
      return 'cog active'
    } else if (number === state.wheel) {
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
        <button onClick={() => counterClockwiseClick()} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={() => clockwiseClick()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
