import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "services",
  initialState: {
    headerBgColor: "bg-[#ffcad4]",
    footerBgColor: "bg-[#ffcad4]",
    cardBgColor: "bg-[#ffcad4]",
    borderColor: "border-pink-300",
    formBgColor: "bg-[#ffcad4]",
    optionBgColor: "bg-pink-100",
    optionBgColorSelected: "bg-pink-200",
    linkBgColorSelected: "bg-pink-300",
    textColor: "text-gray-600",
    headingColor: "text-gray-700",
    navActiveColor: "text-gray-800",
    navActiveBorderColor: "border-gray-800",
  },
  reducers: {
    changeColor(state, action) {
      return action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
