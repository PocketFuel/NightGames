import React from 'react';
// Correct the import path according to where CompetitorProps is actually defined
import { CompetitorProps } from '../contexts/CompetitorContext';

const SmallCompetitorCard: React.FC<CompetitorProps> = ({ id, name, imgSrc, votes }) => {
  return (
    <div className="flex gap-3 items-center p-2 bg-darknight text-white rounded-lg">
      <img className="w-12 h-12 object-cover rounded-full mb-2" src={imgSrc} alt={`Competitor ${name}`} />
      <div className="flex flex-col">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-md">Votes: {votes}</p>
      </div>
    </div>
  );
};

export default SmallCompetitorCard;