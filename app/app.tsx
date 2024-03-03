'use client'
import React, { useState, useEffect } from 'react';
import { Loader } from '@react-three/drei'
import { Toaster } from 'sonner'
import Background from './components/Background'
import StickyHeader from './components/StickyHeader'
import Socials from './components/Socials'
import Leaderboard from './components/Leaderboard'
import Footer from './components/Footer'
import CompetitorList from './components/CompetitorList'
import Game from './components/Game'
import Bracket from './components/Bracket'
import Add from './components/Add'
import { CompetitorProvider, useCompetitor } from './contexts/CompetitorContext'
import { MatchProvider } from './contexts/MatchContext'
import FullLeaderboard from './components/FullLeaderboard'
import Countdown from './components/Countdown'
import Timer from './components/Timer'

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const { competitors, addCompetitor, removeCompetitor, setCompetitorReady } = useCompetitor();

  useEffect(() => {
    const allReady = competitors.every(competitor => competitor.isReady);
    if (allReady && competitors.length >= 2) {
      setShowCountdown(true);
    }
  }, [competitors]);

  // Handle countdown finish to start the timer
  const handleCountdownFinish = () => {
    setShowCountdown(false); // Optionally hide countdown
    setStartTimer(true); // Start the timer
  };

  return (
    <CompetitorProvider>
      <MatchProvider>
        <div className='bg-black px-4 md:px-8'>
          <Background />
          <StickyHeader />
          <Leaderboard />
          <FullLeaderboard />
          <Add />
          <CompetitorList />
          <Bracket />
          {showCountdown && <Countdown onFinish={handleCountdownFinish} />}
          {startTimer && <Timer onTimeEnd={() => console.log('Timer ended')} startTimer={true} countdownComplete={true} />}
          <Game setActiveMultiplier={() => {}} />
          <Footer />
          <Toaster position='bottom-left' richColors />
          <Socials />
          <Loader />
        </div>
      </MatchProvider>
    </CompetitorProvider>
  );
};
