// Duck pattern
import { createSlice } from '@reduxjs/toolkit';

// interface CounterState {
//   value: number;
// }

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    // decrement
    // reset
    incremented(state) {
      // it is ok to do this because immer makes it immutable under the hood
      state.value++;
    }
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;