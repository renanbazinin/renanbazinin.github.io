import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import LifeCanvas from '../components/LifeCanvas';
import CopyButton from '../components/CopyButton';
import SmartLink, { LinkRow } from '../components/SmartLink';
import { ABOUT, HERO, PROFILE, PROOF, SKILLS } from '../data/profile';
import { WORK } from '../data/work';
import { MORE_PROJECTS } from '../data/projects';
import { AWARDS, OPEN_SOURCE, PUBLICATIONS } from '../data/research';
import { EXPERIENCE } from '../data/experience';
import GitLog from '../components/GitLog';

function SectionHead({ id, path, title, children }) {
  return (
    <div className="section-head">
      <span className="path" aria-hidden="true">
        {path}
      </span>
      <h2 id={`${id}-title`} tabIndex={-1}>
        {title}
      </h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Hero() {
  const caseStudies = WORK.filter((w) => w.caseStudy);
  const [paused, setPaused] = useState(false);
  // The choice is remembered; read it after hydration so the prerendered markup still matches.
  useEffect(() => {
    try {
      if (localStorage.getItem('life-paused') === '1') setPaused(true);
    } catch {
      // Storage blocked: the animation just starts unpaused.
    }
  }, []);
  const togglePaused = () =>
    setPaused((p) => {
      try {
        localStorage.setItem('life-paused', p ? '0' : '1');
      } catch {
        // Storage blocked: the choice lasts for this page view only.
      }
      return !p;
    });
  return (
    <section className="hero" aria-labelledby="hero-title">
      <LifeCanvas paused={paused} />
      <div className="wrap">
        <div data-life-avoid>
          <h1 id="hero-title" tabIndex={-1}>
            {PROFILE.name}
          </h1>
          <p className="lede">
            <b>{HERO.lead}</b> {HERO.intro}
          </p>
          <p className="meta">
            {[...PROFILE.stack, PROFILE.degree].map((s, i) => (
              <Fragment key={s}>
                {i > 0 && ' '}
                <span>{s}</span>
              </Fragment>
            ))}
          </p>
          <div className="ctas">
            <a className="btn primary" href={PROFILE.cv}>
              <Icon name="file" /> CV (PDF)
            </a>
            <a className="btn" href={`mailto:${PROFILE.email}`}>
              <Icon name="mail" /> Email
            </a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="term" data-life-avoid>
          <div className="bar" aria-hidden="true">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="t">renan@bazinin: ~</span>
          </div>
          <div className="term-body">
            <p className="cmd">
              <span className="ps" aria-hidden="true">
                renan@bazinin<i>:~$</i>{' '}
              </span>
              whoami
            </p>
            <p>{'full-stack developer · AI agents · fintech'}</p>
            <p className="cmd">
              <span className="ps" aria-hidden="true">
                renan@bazinin<i>:~$</i>{' '}
              </span>
              ls work/
            </p>
            <p>
              {caseStudies.map((w) => (
                <Link key={w.slug} className="dir" to={`/work/${w.slug}`}>
                  {w.slug}/
                </Link>
              ))}
            </p>
            <p className="cmd" aria-hidden="true">
              <span className="ps">
                renan@bazinin<i>:~$</i>{' '}
              </span>
              <span className="cursor" />
            </p>
          </div>
        </div>
      </div>
      <button type="button" className="tool life-toggle" aria-pressed={paused} onClick={togglePaused} data-life-avoid>
        pause animation
      </button>
    </section>
  );
}

function Proof() {
  return (
    <div className="wrap">
      <div className="highlights">
        <p className="cmd" aria-hidden="true">
          <span className="ps">
            renan@bazinin<i>:~$</i>{' '}
          </span>
          cat highlights.txt
        </p>
        <ul aria-label="Highlights">
          {PROOF.map((p) => (
            <li key={p.key}>
              <SmartLink className="hl" href={p.href} showExternal={false}>
                <span className="ok" aria-hidden="true">
                  ✓
                </span>
                <span className="k">{p.key}</span>
                <span className="leader" aria-hidden="true" />
                <span className="v">{p.value}</span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WorkCard({ item }) {
  const page = item.caseStudy ? `/work/${item.slug}` : null;
  return (
    <article className={`card${item.image ? '' : ' text-only'}`} aria-labelledby={`w-${item.slug}`}>
      <div className="bar" aria-hidden="true">
        ~/work/{item.slug}
      </div>
      {item.image && (
        <div className="shot">
          <img
            src={item.image.src}
            srcSet={`${item.image.src.replace('.webp', '-640.webp')} 640w, ${item.image.src.replace('.webp', '-800.webp')} 800w, ${item.image.src} 1200w`}
            sizes="(max-width: 900px) calc(100vw - 32px), 552px"
            alt={item.image.alt}
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="body">
        <span className="tag">{item.tag}</span>
        <h3 id={`w-${item.slug}`}>{page ? <Link to={page}>{item.title}</Link> : item.title}</h3>
        <p className="role">
          {item.role.split(' · ').map((part, i) => (
            <Fragment key={part}>
              {i > 0 && ' '}
              <span>{part}</span>
            </Fragment>
          ))}
        </p>
        <p>{item.summary}</p>
        {item.note && <p className="note">{item.note}</p>}
        {item.chips.length > 0 && (
        <ul className="chips" aria-label="Key facts">
          {item.chips.map((c) => (
            <li key={c} className="chip">
              {c}
            </li>
          ))}
        </ul>
        )}
        <div className="links">
          {page && (
            <Link to={page}>
              case study<span className="sr-only">: {item.title}</span> <span aria-hidden="true">→</span>
            </Link>
          )}
          {item.links.map((l) => (
            <SmartLink key={l.href} href={l.href} context={item.title}>
              {l.label}
            </SmartLink>
          ))}
        </div>
      </div>
    </article>
  );
}

function Authors({ pub }) {
  if (!pub.authors) return <p className="authors">{pub.with}</p>;
  return (
    <p className="authors">
      {pub.authors.map((a, i) => (
        <span key={a}>
          {a === 'R. Bazinin' ? <b>{a}</b> : a}
          {i < pub.authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="wrap">
          <SectionHead id="work" path="~/work" title="Selected work">
            Current job first, then research and open source.
          </SectionHead>
          <div className="cards">
            {WORK.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="more" className="section" aria-labelledby="more-title">
        <div className="wrap">
          <SectionHead id="more" path="~/projects" title="More projects">
            Smaller things I built and keep online.
          </SectionHead>
          <div className="more">
            {MORE_PROJECTS.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((p) => (
                    <li key={p.title}>
                      <span className="name">{p.title}</span>
                      <p>{p.text}</p>
                      <LinkRow links={p.links} context={p.title} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="more-foot">
            <SmartLink href={PROFILE.github}>More on GitHub</SmartLink>
          </p>
        </div>
      </section>

      <section id="research" className="section" aria-labelledby="research-title">
        <div className="wrap">
          <SectionHead id="research" path="~/research" title="Research">
            Three co-authored papers from the FocusFlow and Creative Foraging projects.
          </SectionHead>
          <ol className="pubs">
            {PUBLICATIONS.map((p) => (
              <li key={p.title} className="pub">
                <div className="venue-row">
                  <span className="badge">{p.venue}</span>
                  {p.award && <span className="badge award">{p.award}</span>}
                </div>
                <h3>{p.title}</h3>
                <Authors pub={p} />
                <p className="venue-long">{p.venueLong}</p>
                <LinkRow links={p.links} context={p.venue} />
              </li>
            ))}
          </ol>
          <h3 className="sub-head">Awards</h3>
          <ul className="awards">
            {AWARDS.map((a) => (
              <li key={a.title}>
                <span className="d">{a.date}</span>
                <div>
                  <b>{a.title}</b>
                  <span>{a.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="open-source" className="section" aria-labelledby="open-source-title">
        <div className="wrap">
          <SectionHead id="open-source" path="~/open-source" title="Open source">
            Contributions to other people's projects, linked to the pull requests.
          </SectionHead>
          <ul className="oss">
            {OPEN_SOURCE.map((o) => (
              <li key={o.repo}>
                <SmartLink href={o.href}>{o.repo}</SmartLink>
                <p>{o.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="wrap">
          <SectionHead id="experience" path="~/experience" title="Experience">
            Work, research and service, newest first.
          </SectionHead>
          <ol className="exp">
            {EXPERIENCE.map((e) => (
              <li key={`${e.dates}-${e.role}`} className="job">
                <span className="dates">{e.dates}</span>
                <div>
                  <h3>{e.role}</h3>
                  <p className="org">{e.org}</p>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {e.link && <LinkRow links={[e.link]} context={e.org} />}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="wrap">
          <SectionHead id="about" path="~/about" title="About" />
          <div className="about">
            <div className="about-text">
              {ABOUT.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <dl className="skills">
              {SKILLS.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items.join(', ')}</dd>
                </div>
              ))}
              <div>
                <dt>Languages</dt>
                <dd>{PROFILE.languages}</dd>
              </div>
            </dl>
          </div>
          <GitLog />
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="wrap">
          <SectionHead id="contact" path="~/contact" title="Contact" />
          <div className="contact">
            <div className="email-row">
              <a id="contact-email" className="email" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
              <CopyButton text={PROFILE.email} label="Copy email" selectId="contact-email" />
            </div>
            <div className="ctas contact-ctas">
              <a className="btn primary" href={PROFILE.cv}>
                <Icon name="file" /> CV (PDF)
              </a>
              <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="meta">
              <span>{PROFILE.languages}</span>
            </p>
            <p className="invite">
              Or move into Forktown with a pull request:{' '}
              <SmartLink href="https://renanbazinin.github.io/forktown/">renanbazinin.github.io/forktown</SmartLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
