import React from "react";
import Questions from "../helper/data";
import { useSelector } from "react-redux";
import Input from "../UI/Input";

const QuestionOptions = () => {
  const currentQues = useSelector((state) => state.ques.currentQues);

  return (
    <ul class="">
      {Questions[currentQues].options.map((option) => (
        <div class="flex mx-8 text-center ">
          <Input/>
          <li class="text-blue-800 py-2 text-justify mx-5">{option}</li>
        </div>
      ))}
    </ul>
  );
};

export default QuestionOptions;
