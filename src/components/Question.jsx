import React from 'react';

const Question = ({ question, handleAnswer }) => {
  if (!question) {
    return <p className="text-center pb-6">Too Many Requests Please Refresh!</p>;
  }

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h2 className="text-lg font-bold mb-4">{question.question}</h2>
      <ul className="space-y-2">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswer(option)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
