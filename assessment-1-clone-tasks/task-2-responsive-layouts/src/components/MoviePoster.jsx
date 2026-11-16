export default function MoviePoster({ src, title, eager = false }) {
  return (
    <figure className="movie-poster">
      <img
        className="movie-poster__image"
        src={src}
        alt={`Poster for ${title}`}
        width="600"
        height="600"
        loading={eager ? "eager" : "lazy"}
      />
    </figure>
  );
}
