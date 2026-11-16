import MovieCard from "./MovieCard.jsx";
import { movies } from "../data/movies.js";

function layoutForPosition(index) {
  if (index === 0) return "featured";
  if (index <= 2) return "standard";
  return "horizontal";
}

export default function MovieGrid() {
  return (
    <section className="movie-grid" aria-label="Movies">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          layout={layoutForPosition(index)}
          eager={index < 2}
        />
      ))}
    </section>
  );
}
