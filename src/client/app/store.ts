import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../Features/counter-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = type store.dispatch;
export type RootState = ReturnType<typeof store.getState>;