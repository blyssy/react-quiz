import Question from "./Question";
import { useContext, useEffect } from "react";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986";

  useEffect(() => {
    if (quizState.questions.length > 0) return;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("data ", data);
        dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
      });
  });
  return (
    <div className='quiz'>
      {quizState.showResults && (
        <div className='results'>
          <div className='congratulations'>Congratulations</div>
          <div className='results-info'>
            <div>You have completed the quiz</div>
            You've got {quizState.correctAnswersCount} of{" "}
            {quizState.questions.length} questions right
          </div>
          <div
            className='next-button'
            onClick={() => dispatch({ type: "RESTART" })}>
            RESTART
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className='score'>
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className='next-button'
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
