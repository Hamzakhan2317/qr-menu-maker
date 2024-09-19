import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./feature/authSlice";
import { api } from "./api";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [api.reducerPath]: api.reducer,
});
