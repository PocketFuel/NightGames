import React from 'react';

interface ScoreProps {
  votes: number;
}

const Score: React.FC<ScoreProps> = ({ votes }) => {
  return (
    <span className="absolute w-12 text-center top-0 right-5 mt-4 z-20 bg-eclipse rounded-full border-2 border-night px-1 py-.5 font-bold text-white">
      {votes}
    </span>
  );
};

export default Score;