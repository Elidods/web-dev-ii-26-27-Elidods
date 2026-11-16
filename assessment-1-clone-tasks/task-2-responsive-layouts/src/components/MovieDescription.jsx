export default function MovieDescription({ title, description }) {
  return (
    <div className="movie-description">
      <h2 className="movie-description__title">{title}</h2>
      <p className="movie-description__text">{description}</p>
    </div>
  );
}
