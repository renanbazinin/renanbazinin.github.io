import { useEffect, useState } from 'react';
import Icon from './Icon';

const BAR = { light: '#f6f8fa', dark: '#0b1021' };

const current = () => {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

// The visible icon comes from CSS, so the prerendered markup matches every theme;
// the pressed state is only added after hydration.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(current());
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => setTheme(current());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    // Keep the phone's browser toolbar in step with the page.
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', BAR[next]));
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked; the choice then lasts for this page view only.
    }
  };

  return (
    <button
      type="button"
      className="tool theme-toggle"
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={theme ? theme === 'dark' : undefined}
    >
      <Icon name="moon" className="icon moon" />
      <Icon name="sun" className="icon sun" />
    </button>
  );
}
