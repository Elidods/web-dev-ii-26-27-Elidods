import Navigation from "./Navigation.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { copyright, navLinks } from "../data/siteContent.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Navigation links={navLinks} label="Footer" className="site-footer__nav" />
      <p className="site-footer__copyright">{copyright}</p>
      <SocialLinks direction="row" onDark />
    </footer>
  );
}
