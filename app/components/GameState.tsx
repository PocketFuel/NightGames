import React from 'react';
import Timer from './Timer';
import Countdown from './Countdown';
import MatchResultsModal from './MatchResultsModal';

interface GameStateProps {
  votes: { [key: string]: number };
  matchPot: number;
  competitors: any[]; // Consider defining a more specific type
  gameInProgress: boolean;
  showResultsModal: boolean;
  readyUp?: (competitorId: string) => void; // Optional if not used
  handleCloseModal?: () => void; // Optional if not used
}

const GameState: React.FC<GameStateProps> = ({
  votes,
  matchPot,
  competitors,
  gameInProgress,
  showResultsModal,
  readyUp, // Ensure this is used or remove if unnecessary
  handleCloseModal, // Ensure this is used or remove if unnecessary
}) => {
  // Placeholder endGame function, replace with actual logic
  const endGame = () => {
    console.log("Game Ended");
  };

  return (
    <div>
      <MatchResultsModal 
        isOpen={showResultsModal} 
        onClose={() => handleCloseModal && handleCloseModal()} 
        playerScores={votes}
        competitors={competitors}
        loadNextMatch={() => {/* Implement as needed */}} 
      />
      <Countdown onFinish={endGame} />
      <Timer onTimeEnd={endGame} startTimer={gameInProgress} />
    </div>
  );
};

export default GameState;