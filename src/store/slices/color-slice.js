import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "services",
  initialState: {
    headerBgColor: "bg-gradient-to-b from-teal-800 to-teal-700",
    footerBgColor: "bg-gradient-to-b from-teal-700 to-teal-800",
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
