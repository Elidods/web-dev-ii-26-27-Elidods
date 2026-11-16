import { categories } from "../data/movies.js";

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Movie categories">
      <ul className="site-nav__list">
        {categories.map((category) => (
          <li key={category.label}>
            <a className="site-nav__link" href={category.href}>
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
