import { createSelector, createSlice } from "@reduxjs/toolkit";
import ISignupState from "./ISignupState";
import { RootState } from "./store";

const initialState: ISignupState = {
  signupState: "INIT",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setState(state, action) {
      state.signupState = action.payload.value;
    },
  },
});

export const { setState } = signupSlice.actions;
export default signupSlice.reducer;

const s = (state: RootState) => state.signup;
export const signupState = createSelector(s, (state) => state.signupState);
