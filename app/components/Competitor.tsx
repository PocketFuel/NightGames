import React from 'react';
import { CompetitorProps } from '../contexts/CompetitorContext';

interface ExtendedCompetitorProps extends CompetitorProps {
  readyUpCompetitor: (id: string | number) => void;
  isReady: boolean;
  votingEnabled: boolean; // New prop to control voting
}

const Competitor: React.FC<ExtendedCompetitorProps> = ({ id, name, imgSrc, votes, voteForCompetitor, onReady, readyUpCompetitor, isReady, votingEnabled }) => {
  const handleReadyUp = () => {
    onReady(id);
    readyUpCompetitor(id); 
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="competitor relative w-full text-black bottom-0 font-bold shadow-lg border-2 border-yellow-300 rounded-xl px-3 pb-3 pt-1 hover:bg-grime hover:border-primary hover:text-white" id={`competitor-${id}`} tabIndex={0}>
        <span className="absolute w-12 text-center top-0 right-5 mt-4 z-15 bg-eclipse rounded-full border-2 border-night px-1 py-.5 font-bold text-white" id={`votes-${id}`}>{votes}</span>
        <img className="w-full object-fit mb-2 rounded-xl" src={imgSrc} alt={`Player ${name}`} />
        <div className="w-full mt-2 flex flex-col justify-between items-center">
        <button onClick={() => voteForCompetitor(id)} className="vote-button text-white font-bold py-2 px-4 rounded" data-competitor-id={id}>Vote for {name}</button>        </div>      
      </div>
      <button onClick={handleReadyUp} className="ready-button text-white font-bold py-2 px-4 rounded" data-competitor-id={id}>
        {isReady ? "Readied Up!" : "Ready up"}
      </button>
    </div>
  );
};

export default Competitor;