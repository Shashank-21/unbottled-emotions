import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "services",
  initialState: {
    headerBgColor: "bg-pink-200",
    footerBgColor: "bg-pink-200",
    cardBgColor: "bg-pink-200",
    textColor: "text-zinc-600",
  },
  reducers: {
    changeColor(state, action) {
      return action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
