import React, { useState, useEffect } from 'react';

const Timer = ({ timeLimit, handleTimeout }) => {
  const [seconds, setSeconds] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        handleTimeout();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, handleTimeout]);

  return (
    <div>
      <p>Time Remaining: <span className="text-red-500">{seconds} seconds</span></p>
    </div>
  );
};

export default Timer;
