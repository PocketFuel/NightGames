import React, { useEffect, useState } from 'react';

interface TimerProps {
  onTimeEnd: () => void;
  startTimer: boolean;
}

const Timer: React.FC<TimerProps> = ({ onTimeEnd, startTimer }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (!startTimer) return;
    if (timeLeft === 0) {
      onTimeEnd();
      return;
    }
    const intervalId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(intervalId);
  }, [startTimer, timeLeft, onTimeEnd]);

  return (
    <div className="text-xl flex gap-3 flex justify-center text-white">
      <span>Time: {timeLeft}s</span>
    </div>
  );
};

export default Timer;