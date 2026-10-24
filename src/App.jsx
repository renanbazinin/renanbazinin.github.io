import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import Nav from './components/Nav';
import SmartLink from './components/SmartLink';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import usePageMeta from './usePageMeta';
import { PROFILE } from './data/profile';

// One effect for every navigation: scroll to the #section if there is one,
// otherwise to the top, and move focus to the new heading for screen readers.
// Back/Forward (POP) leaves the scroll position to the browser's own restoration.
function useRouteFocus(location) {
  const navType = useNavigationType();
  const lastKey = useRef(null);
  const lastPath = useRef(null);
  // The link used to leave each history entry, so Back can put focus on it again.
  const leftBy = useRef(new Map());

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a || !lastKey.current) return;
      const href = a.getAttribute('href');
      const same = [...document.querySelectorAll('a[href]')].filter((x) => x.getAttribute('href') === href);
      leftBy.current.set(lastKey.current, [href, same.indexOf(a)]);
      // Leaving a /#section entry for another page: drop the hash from that entry first. On Back,
      // Chrome scrolls to a URL's fragment instead of restoring the saved position.
      const url = new URL(a.href, window.location.href);
      const plain = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !a.target;
      if (plain && window.location.hash && url.origin === window.location.origin && url.pathname !== window.location.pathname) {
        window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    // StrictMode runs this effect twice on mount; both runs count as the first load.
    const isFirst = lastKey.current === null || lastKey.current === location.key;
    lastKey.current = location.key;
    // Smooth-scroll only within the same page; arriving from another page jumps straight to the section.
    const samePage = lastPath.current === location.pathname;
    lastPath.current = location.pathname;
    let id = '';
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      // Malformed %-escape in a shared link: ignore the hash rather than crash the app.
    }
    if (isFirst && !id) return;
    if (isFirst) {
      // Reload, or Back/Forward into this page from another document: the browser restores the
      // reader's position, so don't jump back to the #section.
      const type = performance.getEntriesByType?.('navigation')[0]?.type;
      if (type === 'reload' || type === 'back_forward') return;
    }
    if (navType === 'POP' && !isFirst) {
      // Back/Forward: the browser restores the scroll position; put focus back on the link used to leave.
      const [href, i] = leftBy.current.get(location.key) ?? [];
      let link = href && [...document.querySelectorAll('a[href]')].filter((x) => x.getAttribute('href') === href)[i];
      // A link inside the closed phone menu cannot take focus: use the menu button instead.
      if (link && !link.getClientRects().length) link = link.closest('#primary-nav') ? document.querySelector('.menu-btn') : null;
      const fallback = id ? document.getElementById(`${id}-title`) : document.querySelector('main h1');
      (link || fallback)?.focus({ preventScroll: true });
      return;
    }
    if (id) {
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (!target) return;
        const smooth = !isFirst && samePage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' });
        if (!isFirst) document.getElementById(`${id}-title`)?.focus({ preventScroll: true });
        if (samePage && !isFirst) return;
        // Arriving from another page (shared link, old-route redirect): web fonts may still change
        // the layout above the section, so jump again once they load, unless the reader moved.
        let moved = false;
        const mark = () => {
          moved = true;
        };
        const events = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
        events.forEach((t) => window.addEventListener(t, mark, { once: true, passive: true }));
        document.fonts?.ready.then(() => {
          events.forEach((t) => window.removeEventListener(t, mark));
          if (!moved) target.scrollIntoView({ behavior: 'instant' });
        });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.querySelector('main h1')?.focus({ preventScroll: true });
  }, [location.pathname, location.hash, location.key, navType]);
}

export default function App() {
  const location = useLocation();
  usePageMeta(location.pathname);
  useRouteFocus(location);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" caseSensitive element={<CaseStudy />} />
          {/* Old routes from the previous site layout, and /work on its own */}
          <Route path="/projects" element={<Navigate to="/#work" replace />} />
          <Route path="/timeline" element={<Navigate to="/#experience" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/work" element={<Navigate to="/#work" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="wrap">
          <span>
            <span className="ps">renan@bazinin:~$</span> exit
          </span>
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} {PROFILE.name} ·{' '}
            <SmartLink href="https://github.com/renanbazinin/renanbazinin.github.io" showExternal={false}>
              site source
            </SmartLink>
          </span>
        </div>
      </footer>
    </>
  );
}
