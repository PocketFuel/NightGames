import React from 'react';

interface CardProps {
  rank: number;
  playerName: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ rank, playerName, imgSrc }) => {
  return (
    <label className="w-full lg:col-span-1 p-1 border-2 border-night bg-darknight hover:border-dusk hover:bg-night transition-all ease-in-out duration-700 active:border-mist rounded-xl relative">
      <div className="flex flex-col w-full gap-1 rounded-md relative">
        <p className="text-lg font-bold text-white bg-night/50 px-3 absolute bottom-0 right-0 rounded-md">Rank {rank}</p>
        <img className="object-fit -mr-8 aspect-ratio: 1/1 rounded-md" src={imgSrc} alt="" />
        <div className="flex flex-col gap-2 ml-2">
          <h4 className="text-lg uppercase font-bold text-white">
            {playerName}
          </h4>
        </div>
      </div>
    </label>
  );
};

export default Card;