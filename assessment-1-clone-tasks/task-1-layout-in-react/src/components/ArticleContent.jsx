import { articleSections } from "../data/siteContent.js";

export default function ArticleContent() {
  return (
    <div className="article__body">
      {articleSections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="article__section">
          <h2 className="article__heading">{section.heading}</h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
