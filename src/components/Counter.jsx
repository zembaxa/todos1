import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterSlice } from '../redux/reducer';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}