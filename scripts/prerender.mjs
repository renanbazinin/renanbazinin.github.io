// Build step 3 of 3: turn the client build into one static HTML file per route.
// Runs after `vite build` (dist/) and `vite build --ssr src/entry-server.jsx` (dist-ssr/).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const entry = (await fs.readdir(ssrDir)).find((f) => /^entry-server\.m?js$/.test(f));
if (!entry) throw new Error('dist-ssr/entry-server.js not found: run the SSR build first');
const { render, headFor, canonicalFor, PRERENDER_ROUTES } = await import(pathToFileURL(path.join(ssrDir, entry)).href);

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
for (const marker of ['<!--app-head-->', '<!--app-html-->', '<div id="root">']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`);
}

for (const { path: route, file } of PRERENDER_ROUTES) {
  const appHtml = await render(route);
  if (route !== '/404' && appHtml.includes('id="nf-title"')) throw new Error(`${route} prerendered the 404 page`);
  // Function replacers: a "$" in the page text must not be read as a replacement pattern.
  const html = template
    .replace('<!--app-head-->', () => headFor(route))
    .replace('<div id="root">', () => `<div id="root" data-route="${route}">`)
    .replace('<!--app-html-->', () => appHtml);
  const out = path.join(distDir, file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
  console.log(`prerendered ${route} -> dist/${file} (${appHtml.length} chars of HTML)`);
}

// sitemap.xml lists every prerendered page except the 404, so new case studies are never missed.
const urls = PRERENDER_ROUTES.filter((r) => r.path !== '/404').map((r) => `  <url><loc>${canonicalFor(r.path)}</loc></url>`);
await fs.writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);
console.log(`wrote dist/sitemap.xml (${urls.length} URLs)`);

await fs.rm(ssrDir, { recursive: true, force: true });
