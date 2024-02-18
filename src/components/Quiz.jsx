import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../utils/api';
import Question from './Question';
import Timer from './Timer';

const Quiz = ({ user }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions().then((data) => setQuestions(data));
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      handleQuizFinish();
    }
  };

  const handleQuizFinish = () => {
    localStorage.setItem('quizResult', JSON.stringify({
      correctAnswers,
      totalQuestions: questions.length,
      answeredQuestions
    }));
    navigate('/result', { state: { correctAnswers } });
  };

  const handleTimeout = () => {
    handleQuizFinish();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user}!</h1>
      <p className="mb-2">Questions Answered: {answeredQuestions}</p>
      <Timer timeLimit={250} handleTimeout={handleTimeout} />
      <div className="mt-8 w-full max-w-md p-4">
        <Question
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
        <p className="text-gray-500 text-sm mt-4">Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>
    </div>
  );
};

export default Quiz;
