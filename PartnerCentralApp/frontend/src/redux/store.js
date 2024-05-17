import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    counter: authReducer,
  },
});

export default store;