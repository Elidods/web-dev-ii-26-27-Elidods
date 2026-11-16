export default function Navigation({ links, label, className = "" }) {
  return (
    <nav className={`site-nav ${className}`.trim()} aria-label={label}>
      <ul className="site-nav__list">
        {links.map((link) => (
          <li key={link.label}>
            <a className="site-nav__link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
