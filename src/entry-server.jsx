/* eslint-disable react-refresh/only-export-components -- server entry, never hot-reloaded */
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export { canonicalFor, headFor, PRERENDER_ROUTES } from './seo.js';

// prerenderToNodeStream waits for Suspense, so any lazy route still renders its content.
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
