import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import signupSlice from "./signupSlice";

const store = configureStore({
  reducer: { signup: signupSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
