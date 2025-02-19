import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import "./index.css";
import { useMovies } from "./hooks/useMovies";

const limit = 10; // Movies per page

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching, refetch } = useMovies(page, limit);

  return (
    <div>
      <h1>Movie List</h1>

      {isLoading && (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      )}

      {error && !isLoading && (
        <div className="error-message">
          <p>Failed to load movies. Please try again.</p>
          <button onClick={() => refetch()}>Retry</button>
        </div>
      )}

      {!isLoading && !error && data?.items && (
        <>
          <Pagination page={page} total={data.total} limit={limit} setPage={setPage} />
          <MovieList movies={data.items} />
        </>
      )}

      {isFetching && <p className="fetching-indicator">Updating movies...</p>}
    </div>
  );
};

export default App;
