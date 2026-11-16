import { albums } from "../data/siteContent.js";

export default function ArticleGallery() {
  return (
    <section id="albums" className="gallery" aria-label="Album artwork">
      {albums.map((album) => (
        <img
          key={album.src}
          className={album.featured ? "gallery__image gallery__image--featured" : "gallery__image"}
          src={album.src}
          alt={album.alt}
          width="1440"
          height="1440"
          loading="lazy"
        />
      ))}
    </section>
  );
}
