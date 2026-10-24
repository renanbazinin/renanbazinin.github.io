import { Link, useParams } from 'react-router-dom';
import { CASE_STUDIES, WORK } from '../data/work';
import { LinkRow } from '../components/SmartLink';
import NotFound from './NotFound';

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = CASE_STUDIES[slug];
  if (!cs) return <NotFound />;

  const others = WORK.filter((w) => w.caseStudy && w.slug !== slug);

  return (
    <article aria-labelledby="case-title">
      <header className="case-head">
        <div className="wrap">
          <p className="crumb">
            <Link to="/#work">~/work</Link>/{slug}
          </p>
          <h1 id="case-title" tabIndex={-1}>
            {cs.title}
          </h1>
          <p className="sub">{cs.subtitle}</p>
        </div>
      </header>
      <div className="wrap case">
        <div className="case-main">
          {cs.image && (
            <figure>
              <img
                src={cs.image.src}
                srcSet={`${cs.image.src.replace('.webp', '-640.webp')} 640w, ${cs.image.src.replace('.webp', '-800.webp')} 800w, ${cs.image.src} 1200w`}
                sizes="(max-width: 900px) calc(100vw - 34px), 726px"
                alt={cs.image.alt}
                width="1200"
                height="675"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          )}
          <section aria-labelledby="problem">
            <h2 id="problem">The problem</h2>
            <p>{cs.problem}</p>
          </section>
          <section aria-labelledby="built">
            <h2 id="built">What I built</h2>
            <ul>
              {cs.built.map((b) => (
                <li key={b.slice(0, 40)}>{b}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="results">
            <h2 id="results">Results</h2>
            <ul>
              {cs.results.map((r) => (
                <li key={r.slice(0, 40)}>{r}</li>
              ))}
            </ul>
          </section>
          <nav className="case-nav" aria-label="Other case studies">
            <Link to="/#work">
              <span aria-hidden="true">← </span>all work
            </Link>
            {others.map((w) => (
              <Link key={w.slug} to={`/work/${w.slug}`}>
                {w.title}
              </Link>
            ))}
          </nav>
        </div>
        <aside className="tldr" aria-label="Summary">
          <div className="bar" aria-hidden="true">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="t">tl;dr</span>
          </div>
          <dl>
            {cs.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <LinkRow links={cs.links} context={cs.title} />
        </aside>
      </div>
    </article>
  );
}
