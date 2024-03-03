import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import Countdown from './Countdown';
import { useMatch } from '../contexts/MatchContext';
import { useCompetitor } from '../contexts/CompetitorContext';

const Match = () => {
  const { gameInProgress, startGame, showCountdown, setShowCountdown } = useMatch();
  const { competitors } = useCompetitor();

  useEffect(() => {
    const allReady = competitors.every(competitor => competitor.isReady);
    if (allReady) {
      setShowCountdown(true);
    }
  }, [competitors, setShowCountdown]);

  const handleCountdownFinish = () => {
    startGame();
    // If you're using the global state for the countdown, you don't need to manage a local startTimer state.
    // setStartTimer(true); // Remove this if not used
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
        <div className="bg-black text-white bg-opacity-50 flex justify-center items-center">
        {showCountdown && <Countdown onFinish={handleCountdownFinish} />}
        {gameInProgress && <Timer onTimeEnd={onMatchEnd} startTimer={true} countdownComplete={!showCountdown} />}          </div>
    </section>
    </>
  );
};

export default Match;