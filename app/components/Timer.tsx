import React, { useEffect, useState } from 'react';

interface TimerProps {
  onTimeEnd: () => void;
  startTimer: boolean;
  countdownComplete: boolean; // New prop to indicate countdown completion
}

const Timer: React.FC<TimerProps> = ({ onTimeEnd, startTimer, countdownComplete }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    // Timer starts only if startTimer is true and countdownComplete is true
    if (!startTimer || !countdownComplete) return;
    if (timeLeft === 0) {
      onTimeEnd();
      return;
    }
    const intervalId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(intervalId);
  }, [startTimer, countdownComplete, timeLeft, onTimeEnd]); // Include countdownComplete in the dependency array

  return (
    <div className="text-xl flex gap-3 flex justify-center text-white">
      <span>Time: {timeLeft}s</span>
    </div>
  );
};

export default Timer;