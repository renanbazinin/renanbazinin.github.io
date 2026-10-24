import { useEffect } from 'react';
import { canonicalFor, metaFor } from './seo';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

// Keeps <title>, description, canonical and share tags in step with client-side
// navigation. The prerendered HTML already has the right values on first load.
export default function usePageMeta(pathname) {
  useEffect(() => {
    const m = metaFor(pathname);
    document.title = m.title;
    setMeta('name', 'description', m.description);
    let robots = document.head.querySelector('meta[name="robots"]');
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (m.noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex');
      canonical?.remove();
      document.head
        .querySelectorAll('meta[property="og:url"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]')
        .forEach((el) => el.remove());
      return;
    }
    robots?.remove();
    const url = canonicalFor(pathname);
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:title', m.title);
    setMeta('property', 'og:description', m.description);
    setMeta('name', 'twitter:title', m.title);
    setMeta('name', 'twitter:description', m.description);
  }, [pathname]);
}
