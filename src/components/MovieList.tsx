import { useMovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import { Movie } from "../api";

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
    const { watchedMovies, toggleWatched } = useMovieContext();

    if (movies.length === 0) {
        return <p className="no-movies">No movies found</p>;
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    watched={watchedMovies.has(movie.id)}
                    toggleWatched={toggleWatched}
                />
            ))}
        </div>
    );
};

export default MovieList;
