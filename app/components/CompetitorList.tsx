import React from 'react';
// Assuming useCompetitor is a hook that provides access to the competitors and removeCompetitor function
import { useCompetitor } from '../contexts/CompetitorContext';

const CompetitorList: React.FC = () => {
  // Use useCompetitor hook to access the competitors array and the removeCompetitor function from the context
  const { competitors, removeCompetitor } = useCompetitor();
  
  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <h2 className="text-white font-bold text-3xl mb-6">Competitors</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        {competitors.map((competitor) => (
          <div key={competitor.id} className="relative border border-dusk p-3 rounded-2xl">
            <img className='w-full mb-2 rounded-md' src={competitor.imgSrc} alt={competitor.name} />
            <p className="text-white font-bold text-xl">{competitor.name}</p>
            <button 
              className="text-mist font-bold uppercase text-xs" 
              onClick={() => removeCompetitor(competitor.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitorList;