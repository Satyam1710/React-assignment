import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../redux/registrationSlice.ts';
import { createStoreHook } from 'react-redux';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export default store;
