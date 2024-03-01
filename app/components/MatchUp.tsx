import React, { useEffect, useState } from 'react';
import { useCompetitor } from '../contexts/CompetitorContext';
import Countdown from './Countdown';
import { useMatch } from '../contexts/MatchContext';
import Match from './Match';
import Competitor from './Competitor';
import TipSection from './TipSection';
import MatchPot from './MatchPot';

const MatchUp: React.FC = () => {
  const [activeMultiplier, setActiveMultiplier] = useState<number>(1); // Default value as an example
  const { gameInProgress, startGame } = useMatch();
  const { competitors, setCompetitorReady } = useCompetitor(); // Assuming useCompetitor provides these
  const [matchPot, setMatchPot] = useState<number>(0); // Example initialization
  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [startTimer, setStartTimer] = useState<boolean>(false);

  useEffect(() => {
    const allReady = competitors.every(competitor => competitor.isReady);
    setShowCountdown(allReady);
  }, [competitors]);

  const handleCountdownFinish = () => {
    setShowCountdown(false);
    startGame();
  };

  // Removed the redundant useEffect that was setting setShowCountdown(true) unconditionally

  return (
    <div className="flex flex-col items-center max-w-5xl">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-day text-md px-4 py-1 mt-12 bg-mist border border-night font-bold uppercase text-eclipse rounded-full">Happening now!</span>
        <h2 className="text-2xl font-bold text-mist">Matchup:</h2>
        <span className="font-bold text-day pt-3 text-lg">Round 1</span>
      </div>
      <Match />
      <div className="mt-3">
        {showCountdown && <Countdown onFinish={() => setStartTimer(true)} />}
        {!gameInProgress && !showCountdown && startTimer}
      </div>
      <div>
        <MatchPot matchPot={matchPot} />
      </div>
      <div className="grid grid-cols-2 gap-6 my-8 justify-center">
      {competitors.slice(0, 2).map((competitor) => 
        <Competitor
          onReady={() => setCompetitorReady(competitor.id)}
          key={competitor.id}
          {...competitor}
          isReady={competitor.isReady || false} // Ensure isReady is always a boolean
          votes={Number(competitor.votes) || 0}
          rank={Number(competitor.rank) || 0}
          booted={competitor.booted || false}
          voteForCompetitor={() => {}} 
          readyUpCompetitor={() => {}}
        />
        )}
      </div>
      <div className='w-full'>
        <TipSection setActiveMultiplier={setActiveMultiplier} />
      </div>
    </div>
  );
};

export default MatchUp;