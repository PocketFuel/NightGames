import React from 'react';
// Correct the import path according to where CompetitorProps is actually defined
import { CompetitorProps } from '../contexts/CompetitorContext';

const SmallCompetitorCard: React.FC<CompetitorProps> = ({ id, name, imgSrc, votes, rank }) => {
  return (
    <div className="flex items-center p-1 bg-darknight gap-3 text-white rounded-lg">
      <div className="flex flex-col md:flex-row md:gap-3 md:pl-3 items-center">
        <p className="text-sm font-bold">{rank}</p>
        <img className="w-12 h-12 object-cover rounded-full mb-2" src={imgSrc} alt={`Competitor ${name}`} />
      </div>
      <div className="flex flex-col">
        <p className="text-md font-bold">{name}</p>
        <p className="text-sm">Votes: {votes}</p>
      </div>
    </div>
  );
};

export default SmallCompetitorCard;