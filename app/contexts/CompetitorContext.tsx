import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export interface CompetitorProps {
  id: string;
  name: string;
  imgSrc: string;
  votes: number;
  voteForCompetitor: (id: string) => void;
  rank: number;
  booted: boolean;
  onReady: (id: string) => void;
}

export enum CompetitorStatus {
  Winner = 'Winner',
  Loser = 'Loser',
  First = 'First',
  Second = 'Second',
  Third = 'Third',
}

export interface Competitor {
  id: string;
  name: string;
  imgSrc: string;
  status?: CompetitorStatus;
  // Add any other fields that are common across your components
}

interface CurrentMatchType {
  matchPot: number;
  competitors: Competitor[]; // Assuming you have a Competitor type defined
  // Include other properties as needed
}

interface TournamentMatch {
  id: string;
  competitors: Competitor[];
}

interface CompetitorContextType {
  competitors: Competitor[];
  currentMatch: TournamentMatch | null;
  setCurrentMatch: (match: TournamentMatch | null) => void;
  addCompetitor: (competitor: Competitor) => void;
  removeCompetitor: (id: string) => void;
}

const CompetitorContext = createContext<CompetitorContextType | undefined>(undefined);

export const CompetitorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentMatch, setCurrentMatch] = useState<TournamentMatch | null>(null);
    const [competitors, setCompetitors] = useState<Competitor[]>(() => {
    // Initialize state with competitors from local storage
    const localData = localStorage.getItem('competitors');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    // Debounce saving to local storage to avoid excessive writes
    const handler = setTimeout(() => {
      localStorage.setItem('competitors', JSON.stringify(competitors));
    }, 500);
  
    return () => clearTimeout(handler);
  }, [competitors]);

  const addCompetitor = (newCompetitor: Competitor) => {
    try {
      setCompetitors(prevCompetitors => {
        const updatedCompetitors = [...prevCompetitors, newCompetitor];
        localStorage.setItem('competitors', JSON.stringify(updatedCompetitors));
        return updatedCompetitors;
      });
    } catch (error) {
      console.error("Error adding competitor:", error);
      // Handle the error appropriately, possibly notifying the user
    }
  };

  const removeCompetitor = (id: string) => {
    setCompetitors(prevCompetitors => prevCompetitors.filter(competitor => competitor.id !== id));
  };
  const value = useMemo(() => ({
    competitors, 
    currentMatch, 
    setCurrentMatch, 
    addCompetitor, 
    removeCompetitor
  }), [competitors, currentMatch]);

  return (
    <CompetitorContext.Provider value={value}>
      {children}
    </CompetitorContext.Provider>
  );
};

export const useCompetitor = () => {
  const context = useContext(CompetitorContext);
  if (context === undefined) {
    throw new Error('useCompetitor must be used within a CompetitorProvider');
  }
  return context;
};