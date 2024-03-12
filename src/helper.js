export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    ...question.incorrectAnswers,
    question.correctAnswer,
  ];

  //convert array of strings to an array of objects then
  //apply a sort using the random number generator to shuffle the answers
  //and then return the array of objects back to an array of strings
  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((shuffledAnswer) => shuffledAnswer.value);
};

export const normalizeQuestions = (backendQuestions) => {
  if (backendQuestions?.length === 0) return [];
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );
    return {
      question: decodeURIComponent(backendQuestion.question),
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      incorrectAnswers,
    };
  });
};
