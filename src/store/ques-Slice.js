import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQues: 0,
  score: 0,
};

const quesSlice = createSlice({
  name: "ques",
  initialState: initialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.currentQues += action.payload;
    },
    currentQues: (state, action) => {
      state.score = 0;
      state.currentQues = 0;
    },
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    // emptyScore: (state, action) => {
    //   state.score = [];
    // },
  },
});

export const quesActions = quesSlice.actions;
export default quesSlice.reducer;
