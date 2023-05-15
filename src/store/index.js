import { configureStore } from "@reduxjs/toolkit";
import quesSlice from "./ques-Slice";

const store = configureStore({
  reducer: { ques: quesSlice },
});

export default store;
