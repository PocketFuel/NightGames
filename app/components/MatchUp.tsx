import React from 'react';
import { useCompetitor } from '../contexts/CompetitorContext';
import Match from './Match';
import Competitor from './Competitor';
import TipSection from './TipSection';
import MatchPot from './MatchPot';
import { useMatch } from '../contexts/MatchContext';

const MatchUp: React.FC = () => {
  const { competitors, setCompetitorReady } = useCompetitor();
  const [matchPot, setMatchPot] = React.useState<number>(0); // Example initialization
  const [activeMultiplier, setActiveMultiplier] = React.useState<number>(1);
  const [votingEnabled, setVotingEnabled] = React.useState<boolean>(true); // Added state for votingEnabled

  return (
    <div className="flex flex-col items-center max-w-5xl">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-day text-md px-4 py-1 mt-12 bg-mist border border-night font-bold uppercase text-eclipse rounded-full">Happening now!</span>
        <h2 className="text-2xl font-bold text-mist">Matchup:</h2>
        <span className="font-bold text-day pt-3 text-lg">Round 1</span>
      </div>
      <Match />
      <div>
        <MatchPot matchPot={matchPot} />
      </div>
      <div className="grid grid-cols-2 gap-6 my-8 justify-center">
        {competitors.slice(0, 2).map((competitor) => (
          <Competitor
            onReady={() => setCompetitorReady(competitor.id)}
            votingEnabled={votingEnabled}
            key={competitor.id}
            {...competitor}
            isReady={competitor.isReady || false} // Ensure isReady is always a boolean
            votes={Number(competitor.votes) || 0}
            rank={Number(competitor.rank) || 0}
            booted={competitor.booted || false}
            voteForCompetitor={() => {}} 
            readyUpCompetitor={() => {}}
          />
        ))}
      </div>
      <div className='w-full'>
        <TipSection setActiveMultiplier={setActiveMultiplier} />
      </div>
    </div>
  );
};

export default MatchUp;