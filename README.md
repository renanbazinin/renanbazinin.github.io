# renanbazinin.com

Source of my personal site, [renanbazinin.com](https://renanbazinin.com): selected work, research, open source, experience and contact, plus a case-study page for each of my main projects.

Built with React 19, React Router 7 and Vite. No UI or animation libraries: the styles are one CSS file with light and dark themes, and the Game of Life in the header is a small canvas component.

## How it's built

- **Content lives in `src/data/`** (`profile.js`, `work.js`, `projects.js`, `research.js`, `experience.js`). Edit those to change the text; the components only lay it out.
- **Every page is prerendered.** `npm run build` builds the client, builds `src/entry-server.jsx` for Node, then `scripts/prerender.mjs` writes one HTML file per route (`/`, `/work/<slug>`, `404.html`) with its own title, description, canonical URL and share tags from `src/seo.js`. The browser hydrates that HTML, so the page is readable before JavaScript runs, and link previews (LinkedIn, WhatsApp) see the right text.
- **New case study:** add an entry to `CASE_STUDIES` in `src/data/work.js` (and `caseStudy: true` on its card). The prerender step adds it to `sitemap.xml` automatically.

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

## Deployment

- **Production:** Vercel (project `renanbazinin`), custom domain `renanbazinin.com`. Pushing to `main` deploys. `vercel.json` sets clean URLs, redirects `www` and the old `/projects`, `/timeline` and `/about` routes, sends a few old project paths to `renanbazinin.github.io/<repo>/`, and caches hashed assets for a year.
- **Mirror:** `.github/workflows/gh-pages.yml` deploys the same build to [renanbazinin.github.io](https://renanbazinin.github.io/) as a fallback. Its pages point their canonical URL at renanbazinin.com. The workflow refuses to deploy if a custom domain is ever bound to the Pages site, because that would move every project site under `/<repo>/` with it.
- **Link check:** `.github/workflows/links.yml` builds the site and checks every link in it once a week and on content changes. (GitHub pauses scheduled runs after 60 days without commits; re-enable it under Actions if that happens.)

### After a deploy that changes titles or share images

- Re-scrape https://renanbazinin.com/ and each `/work/<slug>` in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/), so the profile link and posts show the new card.
- Resubmit https://renanbazinin.com/sitemap.xml in Google Search Console (the verification tag in `index.html` is unchanged, so the property stays verified).
