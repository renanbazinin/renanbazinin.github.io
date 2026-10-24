import { Link, useLocation } from 'react-router-dom';
import SmartLink from '../components/SmartLink';

export default function NotFound() {
  const segs = useLocation().pathname.split('/').filter(Boolean);
  // Old project links were renanbazinin.com/<repo>/...; suggest the same repo on GitHub Pages.
  // CaseStudy also renders this page for /work/<unknown>, so only guess for top-level paths.
  // Only names GitHub allows for a repo, and never /work or /404 in any letter case.
  const first = segs[0] ?? '';
  const project = /^[A-Za-z0-9._-]+$/.test(first) && !['work', '404'].includes(first.toLowerCase()) ? first : null;
  const guess = project ? new URL(`${project}/`, 'https://renanbazinin.github.io/').href : null;

  return (
    <section className="wrap notfound" aria-labelledby="nf-title">
      <p className="crumb mono">404</p>
      <h1 id="nf-title" tabIndex={-1}>
        Page not found
      </h1>
      <p>
        This page doesn&apos;t exist.
        {guess && (
          <>
            {' '}
            If you followed an old link to one of my projects, try <SmartLink href={guess}>{guess.replace('https://', '')}</SmartLink>.
          </>
        )}
      </p>
      <div className="ctas">
        <Link className="btn primary" to="/">
          Home
        </Link>
        <Link className="btn" to="/#work">
          Selected work
        </Link>
      </div>
    </section>
  );
}
