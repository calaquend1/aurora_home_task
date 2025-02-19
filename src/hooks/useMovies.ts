import { useQuery } from "@tanstack/react-query";
import { fetchMovies, Movie } from "../api";

export const useMovies = (page: number, limit: number) => {
  return useQuery<{
      total: number;
      items: Movie[];
    }>({
      queryKey: ["movies", page],
      queryFn: () => fetchMovies(page, limit),
      retry: 3,
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    });
};
