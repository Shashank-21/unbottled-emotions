import { createSlice, nanoid } from "@reduxjs/toolkit";

const TestimonialsSlice = createSlice({
  name: "testimonials",
  initialState: [],
  reducers: {
    addTestimonial(state, action) {
      return [...state, { id: nanoid(), ...action.payload }];
    },
    captureTestimonials(state, action) {
      if (!state.length && action.payload) {
        state.push(...action.payload);
      } else {
        return state;
      }
    },
  },
});

export const { addTestimonial, captureTestimonials } =
  TestimonialsSlice.actions;
export const TestimonialsReducer = TestimonialsSlice.reducer;
