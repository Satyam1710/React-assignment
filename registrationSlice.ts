// registrationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as yup from 'yup';

interface RegistrationState {
  step: number;
  formData: FormData;
}

interface FormData {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId: string;
}

const initialState: RegistrationState = {
  step: 1,
  formData: {
    name: '',
    age: 18,
    sex: '',
    mobile: '',
    govtIdType: '',
    govtId: '',
  },
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    submitForm: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    // Add other actions as needed
  },
});



const registrationReducer = registrationSlice.reducer;
export const { nextStep, submitForm } = registrationSlice.actions;
export default registrationReducer;
