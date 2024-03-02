import React from 'react';
import { useCompetitor } from '../contexts/CompetitorContext';

const FullLeaderboard: React.FC = () => {
  const { competitors, removeCompetitor } = useCompetitor();
  const lowerRankedCompetitors = competitors.filter(competitor => competitor.rank !== undefined && competitor.rank >= 4 && competitor.rank <= 12);
  
  return (
    <div className="w-full max-w-3xl mx-auto my-12 overflow-auto">
      <h2 className="text-white font-bold text-3xl mb-6">Leaderboard</h2>
      <div className='w-full h-96 overflow-auto'>
        <ul className="space-y-2">
        {lowerRankedCompetitors.map((competitor) => (
            <li key={competitor.id} className="flex items-center bg-eclipse border border-night px-2 py-1 rounded-lg shadow">
              <h4 className="w-24 text-white uppercase font-bold text-xs pl-2 mr-4">Rank {competitor.rank}</h4>
              <img className='w-16 h-16 mr-4 rounded-full' src={competitor.imgSrc} alt={competitor.name} />
              <div className="flex justify-between w-full pr-2">
                <p className="text-white font-bold">{competitor.name}</p>
                <p className="text-mist">Votes: {competitor.votes || 0}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullLeaderboard;