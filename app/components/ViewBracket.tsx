import React from 'react';

const ViewBracket = ({ scrollToBracket }: { scrollToBracket: () => void }) => {
    return (
      <button onClick={scrollToBracket} className="vote-modifier w-full gap-3 bg-eclipse rounded-xl border-2 border-night py-3 px-4 hover:border-dusk active:border-mist focus:border-mist transition-all ease-in-ease-out duration-700">
      View Bracket
      </button>
    );
};

export default ViewBracket;