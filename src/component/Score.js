import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quesActions } from "../store/ques-Slice";

const Score = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.ques);

  //  const totalScore =  score?.reduce((a, b) => a + b);

  const goBackHandler = () => {
    // dispatch(quesActions.emptyScore());
    dispatch(quesActions.currentQues());
  };

  return (
    <div class="">
      <h3 class="py-8  text-xl ml-2 text-cyan-800 text-xl font-bold">
        Your Score is Hear - <strong>{score}/20</strong>
      </h3>
      <div class="text-center">
        <button
          onClick={goBackHandler}
          class="bg-gray-100 px-2 py-1 text-xl text-blue-400 rounded-sm"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Score;
