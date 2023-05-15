import React from "react";
import { useDispatch } from "react-redux";
import { quesActions } from "../store/ques-Slice";

const NextQuestion = () => {
  const dispatch = useDispatch();

  const nextQuestionHandler = () => {
    dispatch(quesActions.nextQuestion(1));
  };
  
  return (
    <div class="text-center">
      <button
        onClick={nextQuestionHandler}
        class="px-5 py-1 bg-slate-400 text-white font-serif font-sans text-xl rounded-sm justify-center"
      >
        Next
      </button>
    </div>
  );
};

export default NextQuestion;
