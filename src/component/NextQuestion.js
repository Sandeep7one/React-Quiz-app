import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quesActions } from "../store/ques-Slice";

const NextQuestion = ({ optionHandler, setActive }) => {
  const dispatch = useDispatch();

  const nextQuestionHandler = () => {
    optionHandler();
    setActive();
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
