import React, { createContext, useContext, useEffect, useState } from "react";

interface MovieContextType {
  watchedMovies: Set<string>;
  toggleWatched: (id: string) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watchedMovies, setWatchedMovies] = useState(new Set<string>());

  // Load watched movies from local storage on mount
  useEffect(() => {
    const savedMovies = localStorage.getItem("watchedMovies");
    if (savedMovies) {
      setWatchedMovies(new Set(JSON.parse(savedMovies)));
    }
  }, []);

  // Save to local storage when watchedMovies changes
  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify([...watchedMovies]));
  }, [watchedMovies]);

  const toggleWatched = (id: string) => {
    setWatchedMovies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return <MovieContext.Provider value={{ watchedMovies, toggleWatched }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
