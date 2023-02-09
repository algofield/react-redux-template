import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrementCounter, incrementCounter, resetCounter } from '../features/counter/counter-slice';

function App () {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
  const handleClickIncrement = () => dispatch(incrementCounter());
  const handleClickDecrement = () => dispatch(decrementCounter());
  const handleClickReset = () => dispatch(resetCounter())

  return (
    <React.Fragment>
      <h1>Hello World.</h1>
      <p>The count is: {value} </p>
      <button onClick={handleClickIncrement}>
        +
      </button>
      <button onClick={handleClickDecrement}>
        -
      </button>
      <button onClick={handleClickReset}>
        reset
      </button>
    </React.Fragment>
  )
}

export default App;