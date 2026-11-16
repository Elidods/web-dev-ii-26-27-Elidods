export default function WatchButton({ title }) {
  return (
    <button className="button button--watch" type="button" aria-label={`Watch Now: ${title}`}>
      Watch Now
    </button>
  );
}
