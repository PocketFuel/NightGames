import React from 'react';
// Correct the import path according to where CompetitorProps is actually defined
import { CompetitorProps } from '../contexts/CompetitorContext';

const SmallCompetitorCard: React.FC<CompetitorProps> = ({ id, name, imgSrc, votes, rank }) => {
  return (
    <div className="flex items-center p-2 bg-darknight text-white rounded-lg">
      <p className="text-xl mr-3 font-bold">{rank}</p>
      <img className="w-12 h-12 object-cover rounded-full mr-6 mb-2" src={imgSrc} alt={`Competitor ${name}`} />
      <div className="flex flex-col gap-1">
        <p className="text-md font-bold">{name}</p>
        <p className="text-sm">Votes: {votes}</p>
      </div>
    </div>
  );
};

export default SmallCompetitorCard;