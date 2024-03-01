import React, { createContext, useContext, useState } from 'react';

interface MatchContextType {
  gameInProgress: boolean;
  startGame: () => void;
  endGame: () => void;
  showCountdown: boolean;
  setShowCountdown: (show: boolean) => void;
  showResultsModal: boolean;
  setShowResultsModal: (show: boolean) => void;
}

const MatchContext = createContext<MatchContextType | undefined>(undefined);

export const MatchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameInProgress, setGameInProgress] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);

  const startGame = () => {
    setGameInProgress(true);
    setShowCountdown(false);
  };

  const endGame = () => {
    setGameInProgress(false);
    setShowResultsModal(true);
  };

  return (
    <MatchContext.Provider value={{ gameInProgress, startGame, endGame, showCountdown, setShowCountdown, showResultsModal, setShowResultsModal }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatch = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error('useMatch must be used within a MatchProvider');
  }
  return context;
};