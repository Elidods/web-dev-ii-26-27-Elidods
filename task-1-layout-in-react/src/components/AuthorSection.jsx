import SocialLinks from "./SocialLinks.jsx";
import { author, authorPhoto } from "../data/siteContent.js";

export default function AuthorSection() {
  return (
    <section id="author" className="author" aria-labelledby="author-heading">
      <div className="author__text">
        <h2 id="author-heading" className="author__heading">
          {author.heading}
        </h2>
        <p>{author.bio}</p>
      </div>
      <img
        className="author__photo"
        src={authorPhoto}
        alt={author.photoAlt}
        width="200"
        height="200"
        loading="lazy"
      />
      <SocialLinks direction="column" />
    </section>
  );
}
