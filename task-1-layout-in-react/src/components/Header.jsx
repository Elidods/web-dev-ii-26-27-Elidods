import Navigation from "./Navigation.jsx";
import { logo, navLinks } from "../data/siteContent.js";

export default function Header() {
  return (
    <header className="site-header">
      <a className="site-header__logo-link" href="#article">
        <img className="site-header__logo" src={logo} alt="Erased Tapes home" />
      </a>
      <Navigation links={navLinks} label="Main" className="site-header__nav" />
    </header>
  );
}
