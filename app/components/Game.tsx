import React, { useState, useEffect } from 'react';
import { usePot } from '../contexts/PotContext';
import { useCompetitor, Competitor } from '../contexts/CompetitorContext';
import MatchUp from './MatchUp';

interface GameProps {
  setActiveMultiplier: (multiplier: number) => void;
}

const Game: React.FC<GameProps> = ({ setActiveMultiplier }) => {
  const { currentMatch, setCurrentMatch } = useCompetitor(); // Ensure the generic type is correctly defined
  const [votes, setVotes] = useState<{ [key: string]: number }>({});
  const [gameInProgress, setGameInProgress] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const { updatePots } = usePot();

  useEffect(() => {
  }, [currentMatch, setCurrentMatch]);

  useEffect(() => {
    if (showCountdown) {
      const timer = setTimeout(() => {
        if (!gameInProgress) {
          startGame();
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showCountdown, gameInProgress]);

  const startGame = () => {
    setGameInProgress(true);
    setShowCountdown(false);
    setActiveMultiplier(2); // Ensure this logic aligns with your game's rules
  };

  const voteForCompetitor = (competitorId: string) => {
    if (!gameInProgress) {
      alert('Voting is only allowed during the game.');
      return;
    }
    setVotes(prevVotes => {
      const newVotes = { ...prevVotes, [competitorId]: (prevVotes[competitorId] || 0) + 1 }; // Assuming votes are incremented by 1, adjust as necessary
      updatePots(newVotes[competitorId], 1); // Assuming this is correct, adjust the second argument as necessary
      return newVotes;
    });
  };

  const loadNextMatch = () => {
    console.log("Loading next match...");
    // Implement logic to fetch and set the next match
  };

  if (!currentMatch) return <div className='text-white font-bold mb-9'>Loading match...</div>;


  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-6">
        <MatchUp />
      </div>
    </div>
  );
};

export default Game;