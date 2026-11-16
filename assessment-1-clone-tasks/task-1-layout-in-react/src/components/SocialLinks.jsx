import { socialLinks } from "../data/siteContent.js";

/* direction: "column" (author section) or "row" (footer).
   onDark: true when the icons sit on the dark footer. The supplied X icon is
   white, so on light backgrounds it is inverted in CSS to stay visible. */
export default function SocialLinks({ direction = "column", onDark = false }) {
  const classes = [
    "social-links",
    `social-links--${direction}`,
    onDark ? "social-links--on-dark" : "social-links--on-light",
  ].join(" ");

  return (
    <ul className={classes} aria-label="Social media">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            className="social-links__link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.name} (opens in a new tab)`}
          >
            <img
              className={`social-links__icon social-links__icon--${link.name.toLowerCase()}`}
              src={link.icon}
              alt=""
              width="50"
              height="50"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
