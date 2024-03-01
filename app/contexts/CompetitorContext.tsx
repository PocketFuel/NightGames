import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// Define the types for your context
interface Competitor {
  id: string;
  name: string;
  imgSrc: string;
  status?: CompetitorStatus;
  isReady?: boolean;
  booted?: boolean;
  votes?: number;
  rank?: number;
}

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
  setCompetitorReady: (competitorId: string) => void;
}

// Create the context
const CompetitorContext = createContext<CompetitorContextType | undefined>(undefined);

// Provide the context
export const CompetitorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentMatch, setCurrentMatch] = useState<TournamentMatch | null>(null);
  const [competitors, setCompetitors] = useState<Competitor[]>(() => {
    const localData = localStorage.getItem('competitors');
    let initialCompetitors: Competitor[] = localData ? JSON.parse(localData) : [];
    // Ensure isReady is set to false for each competitor initially
    initialCompetitors = initialCompetitors.map(competitor => ({ ...competitor, isReady: false }));
    return initialCompetitors;
  });

  useEffect(() => {
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
    }
  };

  const removeCompetitor = (id: string) => {
    setCompetitors(prevCompetitors => prevCompetitors.filter(competitor => competitor.id !== id));
  };

  const setCompetitorReady = (competitorId: string) => {
    setCompetitors(prevCompetitors =>
      prevCompetitors.map(competitor =>
        competitor.id === competitorId ? { ...competitor, isReady: true } : competitor
      )
    );
  };

  const value = useMemo(() => ({
    competitors, 
    currentMatch, 
    setCurrentMatch, 
    addCompetitor, 
    removeCompetitor,
    setCompetitorReady,
  }), [competitors, currentMatch, setCompetitorReady]);

  return (
    <CompetitorContext.Provider value={value}>
      {children}
    </CompetitorContext.Provider>
  );
};

// Hook to use the context
export const useCompetitor = () => {
  const context = useContext(CompetitorContext);
  if (context === undefined) {
    throw new Error('useCompetitor must be used within a CompetitorProvider');
  }
  return context;
};