import React from 'react';
import { useCompetitor } from '../contexts/CompetitorContext';
import Competitor from './CompetitorList';

interface ParticipantsProps {
  readyCount: number;
  totalCompetitors: number; // New prop for total competitors count
}

const Participants: React.FC<ParticipantsProps> = ({ readyCount, totalCompetitors }) => {
  return (
    <div>
      <h2 className="text-center font-bold text-white text-3xl">Make it $RAIN on Champions</h2>
      <p className="text-center font-bold text-mist text-lg mt-6 text-mist">Select a Champion for battle, and ready up!</p>
      <p className="text-center text-white/50 text-md">Vote on other matches while you wait.</p>
      <span style={{ fontWeight: 'bold' }} className="text-white flex flex-col py-3 text-center">Participants:</span> 
      <p className="text-center text-white mb-6 text-md"><span>{totalCompetitors}</span>/12</p>
    </div>
  );
};

export default Participants;