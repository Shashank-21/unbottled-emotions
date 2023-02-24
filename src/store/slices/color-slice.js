import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "services",
  initialState: {
    headerBgColor: "bg-[#FFCBD8]",
    footerBgColor: "bg-[#FFCBD8]",
    cardBgColor: "bg-[#FFE5EC]",
    borderColor: "border-[#FFB3C6]",
    formBgColor: "bg-[#FFE5EC]",
    optionBgColor: "bg-[#FFE5EC]",
    optionBgColorSelected: "bg-[#FFCBD8]",
    linkBgColorSelected: "bg-[#FFB3C6]",
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
