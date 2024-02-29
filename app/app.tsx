'use client'
import { Loader } from '@react-three/drei'
import { Toaster } from 'sonner'
import Background from './components/Background'
import StickyHeader from './components/StickyHeader'
import Socials from './components/Socials'
import Leaderboard from './components/Leaderboard'
import Footer from './components/Footer'
import TipSection from './components/TipSection'
import CompetitorList from './components/CompetitorList'
import Game from './components/Game'
import Match from './components/Match'
import Rules from './components/Rules'
import Pots from './components/Pots'
import Bracket from './components/Bracket'
import Add from './components/Add'
import { CompetitorProvider } from './contexts/CompetitorContext';

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
    <div className='bg-black'>
      <Background />
      <StickyHeader />
      <Leaderboard players={players} />
      <Rules />
      <Add />
      <CompetitorList />
      <Bracket />
      <Pots />
      <Match />
      <Game setActiveMultiplier={() => {}} />
      <TipSection setActiveMultiplier={() => {}} />
      <Footer />
      <Toaster position='bottom-left' richColors />
      <Socials />
      <Loader />
    </div>
    </CompetitorProvider>
  )
}
