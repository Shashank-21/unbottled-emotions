import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "services",
  initialState: {
    headerBgColor: "bg-[#FFC2D1]",
    footerBgColor: "bg-[#FFC2D1]",
    cardBgColor: "bg-[#FFE5EC]",
    borderColor: "border-pink-300",
    formBgColor: "bg-[#FFE5EC]",
    optionBgColor: "bg-pink-100",
    optionBgColorSelected: "bg-pink-200",
    linkBgColorSelected: "bg-pink-300",
    textColor: "text-gray-600",
    headingColor: "text-gray-700",
    brandColor: "text-gray-800",
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
