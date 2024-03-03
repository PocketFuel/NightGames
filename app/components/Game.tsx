import React, { useState, useEffect } from 'react';
import { useCompetitor } from '../contexts/CompetitorContext';
import { useMatch } from '../contexts/MatchContext'; // Make sure to import useMatch
import MatchUp from './MatchUp';
import Countdown from './Countdown';
import Timer from './Timer';
import MatchResultsModal from './MatchResultsModal';

interface GameProps {
  setActiveMultiplier: (multiplier: number) => void;
}

const Game: React.FC<GameProps> = ({ setActiveMultiplier }) => {
  const { competitors, setCompetitorReady } = useCompetitor();
  const { startGame, gameInProgress, showCountdown, setShowCountdown, showMatchResultsModal, setShowMatchResultsModal } = useMatch(); // Use MatchContext
  const [votes, setVotes] = useState<{ [key: string]: number }>({});

  // Check if all competitors are ready and start the game
  useEffect(() => {
    const allReady = competitors.every(competitor => competitor.isReady);
    if (allReady && !gameInProgress&& !showCountdown) {
      setShowCountdown(true);
      startGame();
      setActiveMultiplier(2); // Assuming you want to set the multiplier when the game starts
    }
  }, [competitors, gameInProgress, showCountdown, startGame, setShowCountdown, setActiveMultiplier]);

  const onReady = (competitorId: string) => {
    console.log(`Competitor ${competitorId} is ready`);
    setCompetitorReady(competitorId);
  };
  const handleCountdownFinish = () => {
    setShowCountdown(false);
    startGame(); // This should also handle setting `gameInProgress` to true.
  };

  const handleMatchResultsModal = () => {
    setShowMatchResultsModal(true);
  }

  const voteForCompetitor = (competitorId: string) => {
    if (!gameInProgress) {
      alert('Voting is only allowed during the game.');
      return;
    }
    setVotes(prevVotes => {
      const newVotes = { ...prevVotes, [competitorId]: (prevVotes[competitorId] || 0) + 1 };
      return newVotes;
    });
  };

  if (!competitors.length) return <div className='text-white font-bold mb-9'>Loading match...</div>;

  return (
    <div className="flex flex-col items-center gap-6">
      {showCountdown && <Countdown onFinish={handleCountdownFinish} />}
      {gameInProgress && <Timer onTimeEnd={() => {handleMatchResultsModal()}} startTimer={true} countdownComplete={true} />}
      <MatchUp />
      <MatchResultsModal isOpen={showMatchResultsModal} onClose={handleMatchResultsModal} competitors={competitors} loadNextMatch={() => {}} matchPot={0} votes={{}} />
      {/* Include any other components or elements related to the game here */}
    </div>
  );
};

export default Game;