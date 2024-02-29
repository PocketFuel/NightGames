import { useState, useCallback, useEffect } from 'react';

// Define the Competitor type based on your requirements
type Competitor = {
    id: string,
    name: string,
    imgSrc: string,
    votes: number,
    voteForCompetitor: (id: string) => void,
    rank: number,
    booted: boolean,
    onReady: (id: string) => void,
    tags: string[],
};

export const useCompetitor = () => {
  const [competitors, setCompetitors] = useState<Competitor[]>(() => {
    // Load competitors from localStorage on initial load
    const storedCompetitors = localStorage.getItem('competitors');
    return storedCompetitors ? JSON.parse(storedCompetitors) : [];
  });

  // Function to add a new competitor
  const addCompetitor = useCallback((newCompetitor: Competitor) => {
    setCompetitors((prevCompetitors) => {
      const updatedCompetitors = [...prevCompetitors, newCompetitor];
      localStorage.setItem('competitors', JSON.stringify(updatedCompetitors)); // Persist to localStorage
      return updatedCompetitors;
    });
  }, []);

  // Function to remove a competitor
  const removeCompetitor = useCallback((id: string) => {
    setCompetitors((prevCompetitors) => {
      const updatedCompetitors = prevCompetitors.filter(competitor => competitor.id !== id);
      localStorage.setItem('competitors', JSON.stringify(updatedCompetitors)); // Persist to localStorage
      return updatedCompetitors;
    });
  }, []);

  // Optionally, if you want to ensure competitors are saved whenever they change, you can use an effect
  useEffect(() => {
    localStorage.setItem('competitors', JSON.stringify(competitors));
  }, [competitors]);

  return {
    competitors,
    addCompetitor,
    removeCompetitor,
  };
};