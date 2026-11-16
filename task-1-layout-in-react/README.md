# Clone Task 1: Layout in React – Erased Tapes

## Project overview

A React recreation of the Erased Tapes Records blog post "Erased Tapes: Exploring the Sonic Frontier", built from the supplied desktop wireframe and specification. It contains the header (logo and navigation), the article (title, introduction and three-column body), a five-image album gallery, the author section (photo and social icons), three comments, and the footer (navigation, copyright and social icons).

Key specification values: page background `#e9e9e9`, content background white, footer `#14181d`, logo and author photo `200px`, social icons `50px` with `10px` between them, standard spacing `50px`, headings in **Protest Guerrilla**, body text in **Josefin Sans**.

## Technologies used

- React (function components) and JSX
- Vite
- CSS3: Grid (gallery), Flexbox (header, navigation, author, footer), multi-column layout (article text), custom properties and media queries
- Google Fonts: Protest Guerrilla and Josefin Sans (loaded in `index.html`, so an internet connection is needed to see the intended fonts)

## Folder structure

```text
task-1-layout-in-react/
├── assets/                  Original supplied images, logo and icons
├── src/
│   ├── components/          Header, Navigation, ArticleHeader, ArticleContent,
│   │                        ArticleGallery, AuthorSection, SocialLinks,
│   │                        CommentsSection, Comment, Footer
│   ├── data/siteContent.js  Article text, comments, albums, links
│   ├── styles/              variables, base and one stylesheet per section
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Installation

Requires Node.js 18 or newer.

```bash
npm install
```

## Run the project

```bash
npm run dev
```

Open the address printed in the terminal (normally http://localhost:5173).

## Build the project

```bash
npm run build      # outputs to dist/
npm run preview    # optional: serve the production build locally
```

## Implementation notes

- The wireframe shows one featured album and four smaller albums, so five of the six supplied album images are used. `encores-2.jpg` was not used; to swap it in, edit the `albums` list in `src/data/siteContent.js` (and copy the file into `assets/`).
- The wireframe footer reads "Copyright © 2024 Ahmed Webb." while the supplied text file reads "Copyright © 2023 Erased Disks Ltd."; the supplied text file is used. Change `copyright` in `src/data/siteContent.js` to switch.
- Navigation labels come from the wireframe and scroll to the article, album gallery and author section. Social icon links point to each network’s home page.
- The supplied X (Twitter) icon is white, so it is inverted to black on the white author section and left white on the dark footer.
- `instagram-icon.svg` is the supplied file unchanged; it is about 10 MB because it embeds a large bitmap. Replace it with a lighter version if page weight matters.
- Below 700px the standard spacing drops from 50px to 24px and the article text collapses to fewer columns, since only a desktop wireframe was supplied.
