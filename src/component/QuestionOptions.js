import React, { useState } from "react";
import Questions from "../helper/data";
import { useDispatch, useSelector } from "react-redux";
import { quesActions } from "../store/ques-Slice";
import NextQuestion from "./NextQuestion";

const QuestionOptions = ({ currentQues }) => {
  const dispatch = useDispatch();
  const [acctive, setActive] = useState();

  const optionHandler = (index) => {
    if (index + 1 === Questions[currentQues].ans) {
      dispatch(quesActions.updateScore(5));
      setActive(index)
    }
  };

  return (
    <div class="">
      {Questions[currentQues].options.map((option, index) => {
        return (
          <div
            class={
              acctive === index
                ? "flex mx-8 text-center text-blue-800 bg-green-500 "
                : "flex mx-8 text-center text-blue-800 "
            }
          >
            <button class="py-1 m-2 " onClick={() => optionHandler(index)}>
              {option}
            </button>
          </div>
        );
      })}
      <NextQuestion optionHandler={optionHandler} setActive={setActive}/>
    </div>
  );
};

export default QuestionOptions;
