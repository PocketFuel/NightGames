import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useCompetitor } from '../contexts/CompetitorContext';
import Competitor from './Competitor';

interface Competitor {
  id: string; // existing properties
  // other properties...
  rank: number; // Add this line to include the rank property
}

interface RankedCompetitor extends Competitor {
  rank: number;
}

const Leaderboard: React.FC = () => {
  const { competitors } = useCompetitor();
  const topCompetitors = competitors.slice(0, 3);

  return (
    <section className="w-full grid max-w-6xl lg:mx-auto items-center grid-cols-3 lg:grid-cols-3 mb-3 gap-3 border-1 rounded-lg md:pt-12 lg:pt-6 lg:mt-12">
      {topCompetitors.map((player) => (
        <Card key={player.id} playerName={player.name} rank={player.rank ?? 0} {...player} />
      ))}
      <p className="w-full col-span-3 text-center font-bold text-mist mt-12 text-2xl">Hold mini tournaments with your friends. Add them on the spot or use real NFTs.</p>
    </section>
  );
};

export default Leaderboard;