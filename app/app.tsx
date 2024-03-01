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

const players = [
  {
    rank: 1,
    playerName: 'Pit the Panda',
    id: '1',
    name: 'DTP #1453',
    imgSrc: 'pit.png',
    booted: false,
    tags: ['Genesis', 'OG'],
  },
  {
    rank: 2,
    playerName: 'Vipr the Panda',
    id: '2',
    name: 'DTP #1454',
    imgSrc: 'vipr.png',
    booted: false,
    tags: ['Genesis', 'OG'],
  },
  {
    rank: 3,
    playerName: 'Monterrey Rice',
    id: '3',
    name: 'DTP #1455',
    imgSrc: 'monterrey.png',
    booted: true,
    tags: ['Genesis', 'OG'],
  },
];

export default function Home() {
  return (
    <CompetitorProvider>
      <MatchProvider>
        <div className='bg-black'>
          <Background />
          <StickyHeader />
          <Leaderboard players={players} />
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
