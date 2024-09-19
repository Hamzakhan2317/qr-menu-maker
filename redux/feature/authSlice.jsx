import { createSlice } from "@reduxjs/toolkit";
// const token = localStorage.getItem("token");
const initialState = {
  isLoggedIn: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});
export const { setIsLoggedIn } = authSlice.actions;
