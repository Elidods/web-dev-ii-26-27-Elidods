# Clone Task 2: Responsive Layouts – watch.it

## Project overview

A responsive React website for "watch.it", a made-up movie streaming service, built from the supplied specification and the mobile, tablet and desktop wireframes. It shows six movies (poster, title, description and a Watch Now button) in a layout that changes at each breakpoint, with a header containing the logo, category navigation and a Search button.

| Device  | Viewport        | Layout |
| ------- | --------------- | ------ |
| Mobile  | 360px – 720px   | Logo and Search only; one column of full-width cards; 16px spacing |
| Tablet  | 720px – 1024px  | Logo, category links and Search in one row; two-column card grid; 16px / 32px spacing |
| Desktop | 1024px and up   | Featured banner card, two vertical cards, then three horizontal cards; 16px / 48px spacing |

The content container is at most `900px` wide. Colours come from the watch.it brand palette (`#070410`, `#231651`, `#4DCCBD`, `#EEF36A`, `#FFFFFF`). Headings and buttons use **Teko**; everything else uses **Lato**.

## Technologies used

- React (function components) and JSX
- Vite
- CSS3: Grid, Flexbox, custom properties and mobile-first media queries
- Google Fonts: Teko and Lato (loaded in `index.html`, so an internet connection is needed to see the intended fonts)

## Folder structure

```text
task-2-responsive-layouts/
├── assets/                  Original supplied movie posters
├── src/
│   ├── components/          Header, Logo, Navigation, SearchButton, MovieGrid,
│   │                        MovieCard, MoviePoster, MovieDescription, WatchButton
│   ├── data/movies.js       Movie titles, descriptions, posters, categories
│   ├── styles/              variables, base, buttons, header, movie-grid, movie-card
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

- No logo file was supplied, so the "watch.it" logo is text in Teko (`2em` on mobile, `3em` from tablet up), as the specification describes.
- The mobile wireframe shows no category links, so they are hidden below 720px.
- The specification does not define what Search, Watch Now or the category links do, so they are real, keyboard-accessible controls without extra behaviour: the category links point to placeholder anchors, and the Search and Watch Now buttons do not open anything.
- The featured desktop card shows the square poster as a 3:1 banner, cropped to keep the film title visible.
