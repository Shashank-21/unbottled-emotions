import { createSlice, nanoid } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    captureRequests(state, action) {
      if (!state.length && action.payload) {
        state.push(...action.payload);
      } else {
        return state;
      }
    },
    changeRequest(state, action) {
      return state.map((request) => {
        if (request.id === action.payload.id)
          return { ...request, ...action.payload };
        else {
          return request;
        }
      });
    },
    addRequest(state, action) {
      return [...state, { id: nanoid(), ...action.payload }];
    },
  },
});

export const { changeRequest, addRequest, captureRequests } =
  requestsSlice.actions;
export const requestsReducer = requestsSlice.reducer;
