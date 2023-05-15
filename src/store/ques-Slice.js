import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQues: 0,
};

const quesSlice = createSlice({
  name: "ques",
  initialState: initialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.currentQues += action.payload;
    },
    currentQues: (state, action) => {
      state.currentQues = 0;
    },
  },
});

export const quesActions = quesSlice.actions;
export default quesSlice.reducer;
