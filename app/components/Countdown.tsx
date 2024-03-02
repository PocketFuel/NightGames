import React, { useEffect, useState } from 'react';

interface CountdownProps {
  onFinish: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ onFinish }) => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds === 0) {
      onFinish(); // This should trigger only once when the countdown reaches 0
      return;
    }
    const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timerId);
  }, [seconds, onFinish]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 border border-night z-20 flex items-center justify-center">
      <div className="text-white font-bold">
        Game starts in <span>{seconds}</span> seconds
      </div>
    </div>
  );
};

export default Countdown;