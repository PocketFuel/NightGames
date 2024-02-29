import React from 'react';
import { useCompetitor } from '../contexts/CompetitorContext';
import SmallCompetitor from './SmallCompetitor'; // Ensure this path is correct

interface BracketSlotProps {
  competitorIds: string[];
}

const BracketSlot: React.FC<BracketSlotProps> = ({ competitorIds }) => {
  const { competitors } = useCompetitor();

  const slotCompetitors = competitors.filter(competitor => competitorIds.includes(competitor.id));

  return (
    <div className="bracket-slot border-l-4 border-night border-b border-night flex-col gap-3 pl-4"> {/* Adjusted line */}
      {slotCompetitors.map(competitor => (
        <SmallCompetitor 
          key={competitor.id} 
          {...competitor}
          imgSrc={competitor.imgSrc}
          name={competitor.name}
          votes={0}
          voteForCompetitor={() => {}}
          rank={0}
          booted={false}
          onReady={() => {}}
        />
      ))}
    </div>
  );
};

export default BracketSlot;