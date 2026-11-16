import MoviePoster from "./MoviePoster.jsx";
import MovieDescription from "./MovieDescription.jsx";
import WatchButton from "./WatchButton.jsx";

/* layout describes the card’s role in the desktop design:
   "featured"   – wide banner poster with text and button side by side
   "standard"   – poster above text, two cards per row
   "horizontal" – poster on the left, text and button on the right
   Below 1024px every card uses the stacked poster-above-text layout. */
export default function MovieCard({ movie, layout, eager }) {
  return (
    <article className={`movie-card movie-card--${layout}`}>
      <MoviePoster src={movie.poster} title={movie.title} eager={eager} />
      <div className="movie-card__body">
        <MovieDescription title={movie.title} description={movie.description} />
        <WatchButton title={movie.title} />
      </div>
    </article>
  );
}
