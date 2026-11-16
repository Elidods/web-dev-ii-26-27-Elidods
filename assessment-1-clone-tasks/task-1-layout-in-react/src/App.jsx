import Header from "./components/Header.jsx";
import ArticleHeader from "./components/ArticleHeader.jsx";
import ArticleContent from "./components/ArticleContent.jsx";
import ArticleGallery from "./components/ArticleGallery.jsx";
import AuthorSection from "./components/AuthorSection.jsx";
import CommentsSection from "./components/CommentsSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="page">
        <article id="article" className="article">
          <ArticleHeader />
          <ArticleContent />
        </article>
        <ArticleGallery />
        <AuthorSection />
        <CommentsSection />
      </main>
      <Footer />
    </>
  );
}
