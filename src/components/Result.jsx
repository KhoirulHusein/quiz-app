import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const [quizResult, setQuizResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const resultData = JSON.parse(localStorage.getItem('quizResult'));
    setQuizResult(resultData);
  }, []);

  const handleLogout = () => {
    // Navigate kembali ke halaman utama
    navigate('/signin');
  };

  if (!quizResult) {
    return <p className="text-center">Loading result...</p>;
  }

  const { correctAnswers, totalQuestions } = quizResult;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Quiz Finished!</h1>
      <div className="border border-gray-300 rounded-md p-4">
        <p>Correct Answers: {correctAnswers}</p>
        <p>Incorrect Answers: {totalQuestions - correctAnswers}</p>
        <p>Total Answered Questions: {totalQuestions}</p>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Result;
