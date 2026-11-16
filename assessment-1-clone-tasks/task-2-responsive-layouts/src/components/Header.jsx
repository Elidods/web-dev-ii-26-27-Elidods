import Logo from "./Logo.jsx";
import Navigation from "./Navigation.jsx";
import SearchButton from "./SearchButton.jsx";

export default function Header() {
  return (
    <header className="site-header" id="top">
      <Logo />
      <Navigation />
      <SearchButton />
    </header>
  );
}
