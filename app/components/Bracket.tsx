import React, { useEffect } from 'react';
import BracketSlot from './BracketSlot';
import { useCompetitor } from '../contexts/CompetitorContext';

const Bracket: React.FC = () => {
  const { competitors, setCurrentMatch } = useCompetitor();

  // Function to chunk the competitors array into pairs
  const chunkIntoPairs = (competitorsArray: any[]) => {
    let pairs = [];
    for (let i = 0; i < competitorsArray.length; i += 2) {
      pairs.push(competitorsArray.slice(i, i + 2));
    }
    return pairs;
  };

  // Creating pairs of competitor IDs
  const competitorPairs = chunkIntoPairs(competitors).map(pair => pair.map((competitor: any) => competitor.id));

  // Set the first match as the current match when there are at least two competitors
  useEffect(() => {
    if (competitors.length >= 2) {
      const firstMatch = { id: 'match-1', competitors: competitors.slice(0, 2) };
      setCurrentMatch(firstMatch);
    }
  }, [competitors, setCurrentMatch]);

  return (
  <div className="flex flex-col max-w-8xl mx-auto">
      <h2 className="text-white text-center font-bold text-5xl my-9 px-3 md:px-6 lg:px-12">Bracket</h2>
      <div className="flex flex-row py-12 w-full mx-auto">
        {['Round 1', 'Round 2', 'Semi-Finals', 'Finals'].map((round, roundIndex) => (
          <div key={round} className="bracket-container flex flex-col gap-12 border-r border-night w-1/4 px-3 md:px-6 lg:px-12">
            <div className="round-title font-bold text-mist text-2xl">{round}</div>
            <div className="bracket-slots flex flex-col gap-4">
              {roundIndex === 0 && competitorPairs.map((pair, index) => (
                <div key={index} className="bracket-slot-wrapper">
                  <BracketSlot competitorIds={pair} />
                </div>
              ))}
              {/* Placeholder for future rounds' slots */}
            </div>
          </div>
        ))}
      </div>
  </div> 
  );
};

export default Bracket;