import React from 'react';
import { useCompetitor, CompetitorProps } from '../contexts/CompetitorContext';
import Score from './Score'; 

interface ExtendedCompetitorProps extends CompetitorProps {
  readyUpCompetitor: (id: string | number) => void;
  isReady: boolean;
  votingEnabled: boolean;
}

const Competitor: React.FC<ExtendedCompetitorProps> = ({ id, name, imgSrc, votes, readyUpCompetitor, isReady, votingEnabled }) => {
  const { incrementVotes } = useCompetitor();
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="competitor relative w-full text-black bottom-0 font-bold shadow-lg border-2 border-yellow-300 rounded-xl px-3 pb-3 pt-1 hover:bg-grime hover:border-primary hover:text-white flex flex-col justify-between" id={`competitor-${id}`} tabIndex={0}>
        <Score votes={votes} />
        <div className="w-full mt-2 flex flex-col items-center">
          <button onClick={() => incrementVotes(id, votes)} className="vote-button text-white font-bold py-2 px-4 rounded flex flex-col items-center">
            <div className="image-container w-full h-auto relative">
              <img className="w-full h-full object-cover rounded-xl" src={imgSrc} alt={`Player ${name}`} />
            </div>
            <p className="text-center text-lg">{name}</p>
          </button>
        </div>
        <button onClick={() => readyUpCompetitor(id)} className="ready-button text-white font-bold py-2 px-4 rounded">
          {isReady ? 'Unready' : 'Ready'}
        </button>
      </div>
    </div>
  );
};

export default Competitor;