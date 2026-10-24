import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROFILE } from '../data/profile';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';

const SECTIONS = [
  ['work', 'Work'],
  ['research', 'Research'],
  ['open-source', 'Open source'],
  ['experience', 'Experience'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash, location.key]);

  // On phones the links open as a panel: focus moves into it, and Escape closes it.
  useEffect(() => {
    if (!open) return undefined;
    navRef.current?.querySelector('#primary-nav a')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    // A tap outside, or keyboard focus moving out of the header, also closes it.
    const onOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onOutside);
    };
  }, [open]);

  return (
    <header className="nav" ref={navRef}>
      <nav className="wrap" aria-label="Main">
        <Link className="logo" to="/" aria-label="Renan Bazinin, home">
          renan<span>@</span>bazinin<span>:~$</span>
        </Link>
        <ul id="primary-nav" className={`nav-links${open ? ' open' : ''}`}>
          {SECTIONS.map(([id, label]) => (
            <li key={id}>
              <Link to={`/#${id}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-tools">
          <a className="tool cv-tool" href={PROFILE.cv}>
            <Icon name="file" />
            <span className="label" aria-hidden="true">CV.pdf</span>
            <span className="sr-only">CV (PDF)</span>
          </a>
          <ThemeToggle />
          <button
            ref={btnRef}
            type="button"
            className="tool menu-btn"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
