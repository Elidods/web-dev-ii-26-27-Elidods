export default function Comment({ username, text }) {
  return (
    <article className="comment">
      <p className="comment__author">{username}</p>
      <p className="comment__text">{text}</p>
    </article>
  );
}
