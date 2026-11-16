import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/article.css";
import "./styles/gallery.css";
import "./styles/author.css";
import "./styles/social-links.css";
import "./styles/comments.css";
import "./styles/footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
