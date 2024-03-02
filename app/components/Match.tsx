import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import Countdown from './Countdown';
import { useMatch } from '../contexts/MatchContext';
import { useCompetitor } from '../contexts/CompetitorContext';

const Match = () => {
  const { gameInProgress, startGame } = useMatch();
  const { competitors } = useCompetitor();
  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [startTimer, setStartTimer] = useState<boolean>(false);

  useEffect(() => {
    const allReady = competitors.every(competitor => competitor.isReady);
    setShowCountdown(allReady);
    if (allReady) {
      startGame(); // This should ideally set `gameInProgress` to true
    }
  }, [competitors, startGame]);

  const handleCountdownFinish = () => {
    setShowCountdown(false);
    setStartTimer(true); // Start the timer after countdown
  };

  // Example function to call when a match ends
  const onMatchEnd = () => {
    // Assuming you have logic to calculate votes and a multiplier
    const votes = 10; // Example value
    const multiplier = 2; // Example value
    // Handle game end logic here
  };
  
  return (
    <>
    <section className="flex flex-col gap-3 w-full max-w-5xl mx-auto">
        <div className="flex gap-3 justify-center items-center">
            <span id="p1" className="font-semibold text-3xl text-white">Player 1</span>
            <span className="font-semibold text-3xl text-mist">vs</span>
            <span id="p2" className="font-semibold text-3xl text-white">Player 2</span>
        </div>
        {showCountdown && (
        <div className="bg-black text-white bg-opacity-50 flex justify-center items-center">
          <Countdown onFinish={handleCountdownFinish} />
        </div>
      )}
        {gameInProgress && startTimer && <Timer onTimeEnd={onMatchEnd} startTimer={startTimer} countdownComplete={!showCountdown} />}    
    </section>
    </>
  );
};

export default Match;