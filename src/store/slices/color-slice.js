import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "services",
  initialState: {
    headerBgColor: "bg-gradient-to-b from-indigo-800 to-indigo-700",
    footerBgColor: "bg-gradient-to-b from-indigo-700 to-indigo-800",
    textColor: "text-white",
  },
  reducers: {
    changeColor(state, action) {
      return action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
