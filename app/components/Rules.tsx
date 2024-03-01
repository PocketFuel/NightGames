import React from 'react';

const Rules: React.FC = () => {
  return (
    <section className="w-full text-center flex flex-col gap-3 max-w-3xl pb-6 mx-auto">
      <h3 className="font-bold text-white text-xl">Rules:</h3>
      <ol className="flex flex-col gap-3 ml-5">
        <li className="text-day/50 text-md md:text-lg">1 v 1. Single Elimination Tournament.</li>
        <li className="text-day/50 text-md md:text-lg">1st, 2nd, & 3rd Place take 30%, 15%, and 5% of the pot each.</li>
        <li className="text-day/50 text-md md:text-lg">Top 100 Voters share 20% of the pot.</li>
        <li className="text-day/50 text-md md:text-lg">10% of the pot buys $RAIN at spot for burn.</li>
        <li className="text-day/50 text-md md:text-lg max-w-2xl">Numbers are always subject to change. We'd like the winners to feel they actually won something and our community has demanded that a portion of every pot go toward token burns.</li>
      </ol>
    </section>
  );
};

export default Rules;