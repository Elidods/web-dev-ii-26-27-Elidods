import Comment from "./Comment.jsx";
import { comments } from "../data/siteContent.js";

export default function CommentsSection() {
  return (
    <section className="comments" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="comments__heading">
        Comments
      </h2>
      <ul className="comments__list">
        {comments.map((comment) => (
          <li key={comment.username}>
            <Comment username={comment.username} text={comment.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
