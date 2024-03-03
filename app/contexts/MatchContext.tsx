import React, { createContext, useContext, useState } from 'react';

interface MatchContextType {
  gameInProgress: boolean;
  startGame: () => void;
  endGame: () => void;
  showCountdown: boolean;
  setShowCountdown: (show: boolean) => void;
  showMatchResultsModal: boolean;
  setShowMatchResultsModal: (show: boolean) => void;
  // Example addition: Timer state
  timer: number; // Assuming timer is a countdown in seconds
  setTimer: (time: number) => void;
}

const defaultState: MatchContextType = {
  gameInProgress: false,
  startGame: () => {},
  endGame: () => {},
  showCountdown: false,
  setShowCountdown: () => {},
  showMatchResultsModal: false,
  setShowMatchResultsModal: () => {},
  // Initialize timer state
  timer: 30, // Default or initial timer value
  setTimer: () => {},
};

const MatchContext = createContext<MatchContextType>(defaultState);

export const MatchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameInProgress, setGameInProgress] = useState(defaultState.gameInProgress);
  const [showCountdown, setShowCountdown] = useState(defaultState.showCountdown);
  const [showMatchResultsModal, setShowMatchResultsModal] = useState(defaultState.showMatchResultsModal);
  const [timer, setTimer] = useState(defaultState.timer); // Manage timer state

  const startGame = () => {
    setGameInProgress(true);
    setShowCountdown(true); // Assuming you want to show the countdown at the start
    // Reset timer to default or initial value when game starts
    setTimer(30); // Or whatever your game logic requires
  };

  const endGame = () => {
    setGameInProgress(false);
    setShowMatchResultsModal(true);
  };

  const value = {
    gameInProgress,
    startGame,
    endGame,
    showCountdown,
    setShowCountdown,
    showMatchResultsModal,
    setShowMatchResultsModal,
    timer,
    setTimer,
  };

  return <MatchContext.Provider value={value}>{children}</MatchContext.Provider>;
};

export const useMatch = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error('useMatch must be used within a MatchProvider');
  }
  return context;
};