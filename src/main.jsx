import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/jetbrains-mono/wght.css';
import './styles/site.css';
import App from './App.jsx';
import { normalize } from './seo';

// Hosts that also serve the prerendered files by name (GitHub Pages: /index.html,
// /work/forktown.html): drop the extension so the router and the hydration check match.
const clean = window.location.pathname.replace(/(?:\/index)?\.html$/, '') || '/';
if (clean !== window.location.pathname) {
  window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
}

// Links from the old HashRouter site (/#/projects) -> the matching section.
const LEGACY = { '#/projects': '/#work', '#/timeline': '/#experience', '#/about': '/#about' };
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', LEGACY[window.location.hash] ?? '/');
}

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Hydrate when this HTML file was prerendered for the current path. Otherwise (the
// 404 page, or a GitHub Pages fallback) render from scratch; createRoot replaces the
// prerendered markup on its first commit, so there is no blank frame.
const root = document.getElementById('root');
if (root.dataset.route === normalize(window.location.pathname) && root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
