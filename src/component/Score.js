import React from "react";
import { useDispatch } from "react-redux";
import { quesActions } from "../store/ques-Slice";

const Score = () => {
  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch(quesActions.currentQues());
  };

  return (
    <div class="">
      <h3 class="py-8  text-xl ml-2 text-cyan-800 text-xl font-bold">
        Your Score is Hear - <strong>8/10</strong>
      </h3>
      <div class="text-center">
        <button
          onClick={goBackHandler}
          class="bg-black px-2 py-1 text-xl text-blue-400 rounded-sm"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Score;
