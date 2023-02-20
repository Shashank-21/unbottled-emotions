import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    signedIn: false,
    redirect: false,
  },
  reducers: {
    verifyUser(state, action) {
      return {
        signedIn: action.payload === "admin",
        redirect: action.payload !== "admin",
      };
    },
  },
});

export const { verifyUser } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
