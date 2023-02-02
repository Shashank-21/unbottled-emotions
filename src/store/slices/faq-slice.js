import { createSlice, nanoid } from "@reduxjs/toolkit";

const faqSlice = createSlice({
  name: "faqs",
  initialState: [],
  reducers: {
    captureFAQs(state, action) {
      if (!state.length && action.payload) {
        state.push(...action.payload);
      } else {
        return state;
      }
    },
    changeFAQ(state, action) {
      return state.map((faq) => {
        if (faq.id === action.payload.id) return { ...faq, ...action.payload };
        else {
          return faq;
        }
      });
    },
    addFAQ(state, action) {
      return [...state, { id: nanoid(), ...action.payload }];
    },
  },
});

export const { changeFAQ, addFAQ, captureFAQs } = faqSlice.actions;
export const faqReducer = faqSlice.reducer;
