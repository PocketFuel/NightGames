import React from 'react';
import Timer from './Timer';
import MatchPot from './MatchPot';
import { usePot } from '../contexts/PotContext';

const Match = () => {

  // Example function to call when a match ends
  const onMatchEnd = () => {
    // Assuming you have logic to calculate votes and a multiplier
    const votes = 10; // Example value
    const multiplier = 2; // Example value
  };
  
  return (
    <>
    <section className="flex flex-col gap-3 w-full max-w-5xl mx-auto">
        <div className="flex gap-3 justify-center items-center">
            <span id="p1" className="font-semibold text-3xl text-white">Player 1</span>
            <span className="font-semibold text-3xl text-mist">vs</span>
            <span id="p2" className="font-semibold text-3xl text-white">Player 2</span>
        </div>
        <Timer onTimeEnd={() => console.log('Time ended')} startTimer={true} />
    </section>
    </>
  );
};

export default Match;