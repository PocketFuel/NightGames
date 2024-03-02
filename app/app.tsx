'use client'
import React, { useRef } from 'react';
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
import { CompetitorProvider } from './contexts/CompetitorContext'
import { MatchProvider } from './contexts/MatchContext'
import FullLeaderboard from './components/FullLeaderboard'

export default function Home() {
  return (
    <CompetitorProvider>
      <MatchProvider>
        <div className='bg-black'>
          <Background />
          <StickyHeader />
          <Leaderboard />
          <FullLeaderboard />
          <Add />
          <CompetitorList />
          <Bracket />
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
