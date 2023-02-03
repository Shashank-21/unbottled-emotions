import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    username: process.env.REACT_APP_ADMIN_USERNAME,
    signedIn: false,
    redirect: false,
  },
  reducers: {
    verifyUser(state, action) {
      return {
        signedIn:
          action.payload.username === process.env.REACT_APP_ADMIN_USERNAME &&
          action.payload.password === process.env.REACT_APP_ADMIN_PASSWORD,
        redirect: !(
          action.payload.username === process.env.REACT_APP_ADMIN_USERNAME &&
          action.payload.password === process.env.REACT_APP_ADMIN_PASSWORD
        ),
      };
    },
  },
});

export const { verifyUser } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
