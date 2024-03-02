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
    // Assign ranks here if initialCompetitors were just initialized and not loaded from localStorage
    if (!localData) {
      initialCompetitors = assignRanks(initialCompetitors);
    }
    return initialCompetitors;
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem('competitors', JSON.stringify(competitors));
    }, 500);
    return () => clearTimeout(handler);
  }, [competitors]);

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

  // Moved inside the CompetitorProvider component
  const calculateAndAssignRanks = () => {
    setCompetitors(prevCompetitors => {
      const competitorsWithRanks = prevCompetitors
        .map(competitor => ({
          ...competitor,
          rank: Math.floor(Math.random() * 12) + 1, // Example rank assignment logic
        }))
        .sort((a, b) => a.rank - b.rank);
      return competitorsWithRanks;
    });
  };

  // Use effect to call calculateAndAssignRanks
  const assignRanks = (competitors: Competitor[]) => {
    return competitors.map(competitor => ({
      ...competitor,
      rank: Math.floor(Math.random() * 12) + 1,
    })).sort((a, b) => a.rank - b.rank);
  };

  // Adjusted useEffect for localStorage
  useEffect(() => {
    localStorage.setItem('competitors', JSON.stringify(competitors));
  }, [competitors]);

  const addCompetitor = (newCompetitor: Competitor) => {
    setCompetitors(prevCompetitors => {
      const highestRank = prevCompetitors.reduce((max, competitor) => competitor.rank && competitor.rank > max ? competitor.rank : max, 0);
      const updatedCompetitor = { ...newCompetitor, rank: highestRank + 1 };
      const updatedCompetitors = [...prevCompetitors, updatedCompetitor].sort((a, b) => (a.rank ? a.rank : 0) - (b.rank ? b.rank : 0));
      localStorage.setItem('competitors', JSON.stringify(updatedCompetitors));
      return updatedCompetitors;
    });
  };

  const value = useMemo(() => ({
    competitors,
    currentMatch,
    setCurrentMatch,
    addCompetitor,
    removeCompetitor,
    setCompetitorReady,
  }), [competitors, currentMatch]);

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