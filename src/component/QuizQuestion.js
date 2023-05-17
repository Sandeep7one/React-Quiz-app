import React from "react";
import Questions from "../helper/data";

const QuizQuestion = ({ currentQues }) => {
  return (
    <div class="flex justify-center justify-between mx-8 ">
      <p class="text-black-600 text-xl font-bold">
        {currentQues + 1} - {Questions[currentQues].ques}
      </p>
      <span class="text-blue-400">
        {currentQues + 1}/{Questions.length - 1}
      </span>
    </div>
  );
};

export default QuizQuestion;
