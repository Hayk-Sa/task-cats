import { configureStore } from '@reduxjs/toolkit';
import catReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    cat: catReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;