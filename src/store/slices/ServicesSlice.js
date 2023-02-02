import { createSlice } from "@reduxjs/toolkit";

const ServicesSlice = createSlice({
  name: "services",
  initialState: [],
  reducers: {
    captureServices(state, action) {
      if (!state.length && action.payload) {
        state.push(...action.payload);
      } else {
        return state;
      }
    },
    modifyService(state, action) {
      return state.map((service) => {
        if (service.id === action.payload.id) {
          return { ...service, ...action.payload };
        } else {
          return service;
        }
      });
    },
  },
});

export const { captureServices, modifyService } = ServicesSlice.actions;
export const ServicesReducer = ServicesSlice.reducer;
