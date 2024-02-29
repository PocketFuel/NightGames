import React from 'react';
import Competitor from './Competitor'; // Import the Competitor component
import { useCompetitor } from '../contexts/CompetitorContext'; // Import the useCompetitor hook

const MatchUp: React.FC = () => {
  const { competitors } = useCompetitor(); // Access competitors from context

  // Assuming you want to display the first two competitors for simplicity
  const [competitor1, competitor2] = competitors;

  return (
        <div className="flex gap-6 justify-center">
        {competitor1 && <Competitor {...competitor1} votes={0} voteForCompetitor={() => {}} rank={1} booted={false} onReady={() => {}} />}
        {competitor2 && <Competitor {...competitor2} votes={0} voteForCompetitor={() => {}} rank={2} booted={false} onReady={() => {}} />}
        </div>
  );
};

export default MatchUp;