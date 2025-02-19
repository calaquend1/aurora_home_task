import React from "react";
import { Movie } from "../api";

interface MovieCardProps {
    movie: Movie;
    toggleWatched: (id: string) => void;
    watched: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, toggleWatched, watched }) => {
    return (
        <div className={`movie-card ${watched ? "watched" : ""}`}>
            <img src={movie.image_url || "https://via.placeholder.com/300"} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <div className="movie-actions">
                <span className="movie-rating">⭐ {movie.rating}</span>
                <button onClick={() => toggleWatched(movie.id)} className="watch-button">
                    {watched ? "✅ Watched" : "Mark as Watched"}
                </button>
            </div>

        </div>
    );
};


export default MovieCard;
