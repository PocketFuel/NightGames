import React, { useState, useEffect } from 'react';
import NextMatchButton from './NextMatchButton';

interface MatchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  competitors: any[];
  loadNextMatch: () => void;
  matchPot: number;
  votes: { [key: string]: number };
}

const MatchResultsModal: React.FC<MatchResultsModalProps> = ({
  isOpen,
  onClose,
  competitors,
  loadNextMatch,
  matchPot,
  votes,
}) => {
  if (!isOpen) return null;

  const [animatedPot, setAnimatedPot] = useState(0);

  // Assuming votes are structured with player IDs as keys and their scores as values
  // Example votes structure: { 'player1': 5, 'player2': 3 }
  const playerScores = {
    player1: votes['player1'] || 0, // Replace 'player1' with the actual key if different
    player2: votes['player2'] || 0, // Replace 'player2' with the actual key if different
  };

  const totalScore = playerScores.player1 + playerScores.player2;
  const victor = playerScores.player1 > playerScores.player2 ? 'Player 1' : 'Player 2';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen) {
      let currentPot = 0;
      interval = setInterval(() => {
        currentPot += Math.floor(matchPot / 100);
        if (currentPot >= matchPot) {
          currentPot = matchPot;
          clearInterval(interval);
        }
        setAnimatedPot(currentPot);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isOpen, matchPot]);

  return (
    <div className="fixed inset-0 bg-eclipse bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border border-night w-96 shadow-lg rounded-xl bg-eclipse">
        <div className="mt-3 text-center">
          <h3 className="text-3xl leading-6 font-bold text-white">Match Results</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-xl text-gray-500">Player 1 Score: {playerScores.player1}</p>
            <p className="text-xl text-gray-500 mb-6">Player 2 Score: {playerScores.player2}</p>
            <p className="text-lg font-bold text-mist">Match Total: {totalScore}</p>
            <p className="text-lg font-bold text-mist">Tournament Total: {animatedPot}</p>
            <p className="text-2xl font-bold text-green-500 mt-6">Victor: {victor}</p>
          </div>
          <div className="flex gap-3 items-center px-4 py-3">
          <NextMatchButton onStartNextLobby={loadNextMatch} />
            <button id="ok-btn" className="w-full text-black bg-mist font-bold shadow-lg border-2 mt-3 border-yellow-300 rounded-xl p-2 hover:bg-grime hover:border-primary hover:text-white" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchResultsModal;