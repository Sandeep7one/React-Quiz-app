import React from "react";
import QuizQuestion from "./component/QuizQuestion";
import QuestionOptions from "./component/QuestionOptions";
import NextQuestion from "./component/NextQuestion";
import Header from "./component/Layout/Header";
import Cart from "./UI/Cart";
import Score from "./component/Score";
import Questions from "./helper/data";
import { useSelector } from "react-redux";

const App = () => {
  const currentQues = useSelector((state) => state.ques.currentQues);

  return (
    <>
      <Header />
      {Questions.length === currentQues + 1 ? (
        <Cart>
          <Score />
        </Cart>
      ) : (
        <Cart>
          <div>
            <QuizQuestion />
            <QuestionOptions />
            <NextQuestion />
          </div>
        </Cart>
      )}
    </>
  );
};

export default App;
