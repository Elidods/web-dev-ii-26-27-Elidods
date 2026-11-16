import { intro, title } from "../data/siteContent.js";

export default function ArticleHeader() {
  return (
    <header className="article__header">
      <h1 className="article__title">
        <span className="article__title-main">{title.main}</span>{" "}
        <span className="article__title-sub">{title.sub}</span>
      </h1>
      <p className="article__intro">{intro}</p>
    </header>
  );
}
