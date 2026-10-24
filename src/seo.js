// Single source of truth for per-route <head> data. Used at build time by
// scripts/prerender.mjs (through entry-server.jsx) and in the browser by usePageMeta.
import { CASE_STUDIES } from './data/work';

export const SITE_URL = 'https://renanbazinin.com';

const HOME = {
  title: 'Renan Bazinin - Full-Stack Developer',
  description:
    'Full-stack developer in fintech. FocusFlow (ACM SYSTOR 2025 Best Poster Award), three co-authored papers, 6 merged nand2tetris Web IDE PRs and Forktown.',
};

export const ROUTES = {
  '/': HOME,
  ...Object.fromEntries(
    Object.entries(CASE_STUDIES).map(([slug, cs]) => [`/work/${slug}`, { title: `${cs.title} - Renan Bazinin`, description: cs.description }]),
  ),
};

export const NOT_FOUND = {
  title: 'Page not found - Renan Bazinin',
  description: 'This page does not exist on renanbazinin.com.',
  noindex: true,
};

// Files written by scripts/prerender.mjs. '/404' renders the "*" route.
export const PRERENDER_ROUTES = [
  { path: '/', file: 'index.html' },
  ...Object.keys(CASE_STUDIES).map((slug) => ({ path: `/work/${slug}`, file: `work/${slug}.html` })),
  { path: '/404', file: '404.html' },
];

// Case-sensitive like the static hosts (Vercel, GitHub Pages) and the /work/:slug route.
export const normalize = (pathname) => (pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname);

export function metaFor(pathname) {
  return ROUTES[normalize(pathname)] ?? NOT_FOUND;
}

export function canonicalFor(pathname) {
  const p = normalize(pathname);
  return SITE_URL + (p === '/' ? '/' : p);
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// HTML injected at <!--app-head--> by the prerender script.
export function headFor(pathname) {
  const m = metaFor(pathname);
  const tags = [`<title>${esc(m.title)}</title>`, `<meta name="description" content="${esc(m.description)}" />`];
  if (m.noindex) {
    tags.push('<meta name="robots" content="noindex" />');
  } else {
    const url = canonicalFor(pathname);
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:title" content="${esc(m.title)}" />`,
      `<meta property="og:description" content="${esc(m.description)}" />`,
      `<meta name="twitter:title" content="${esc(m.title)}" />`,
      `<meta name="twitter:description" content="${esc(m.description)}" />`,
    );
  }
  return tags.join('\n    ');
}
