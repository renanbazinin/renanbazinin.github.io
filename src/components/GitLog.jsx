import { useEffect, useRef, useState } from 'react';
import SmartLink from './SmartLink';
import { TIMELINE } from '../data/timeline';

// Short, stable fake commit hashes, so the list reads like real `git log` output.
const hash = (s) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
};

const BRANCH_COLORS = ['var(--amber)', 'var(--purple)'];

// Work out, row by row, what the two graph lanes draw: main (lane 0) runs the whole way,
// a side branch (lane 1) opens on `branch` rows and closes on `merge` rows.
function layout(rows) {
  let open = false;
  let branchNo = -1;
  return rows.map((row, i) => {
    const main = i === 0 ? 'bottom' : i === rows.length - 1 ? 'top' : 'full';
    let side = open ? 'full' : 'none';
    let link = false;
    if (row.type === 'branch') {
      open = true;
      branchNo += 1;
      side = 'bottom';
      link = true;
    } else if (row.type === 'merge') {
      open = false;
      side = 'top';
      link = true;
    }
    const dotLane = row.type === 'merge' ? 0 : row.lane;
    return { ...row, main, side, link, dotLane, color: BRANCH_COLORS[Math.max(branchNo, 0) % BRANCH_COLORS.length] };
  });
}

const ROWS = layout(TIMELINE);

export default function GitLog() {
  const ref = useRef(null);
  const [play, setPlay] = useState(false);

  // When the log scrolls into view, each line lights up in turn, like output being printed.
  // The text is visible the whole time; only a highlight runs down the list.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="gitlog-win">
      <div className="bar" aria-hidden="true">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="t">~/about $ git log --graph --reverse</span>
      </div>
      <h3 className="sr-only">Timeline, oldest first</h3>
      <ol ref={ref} className={`gitlog${play ? ' play' : ''}`}>
        {ROWS.map((r, i) => (
          <li key={`${r.year}-${r.msg}`} style={{ '--i': i, '--branch': r.color }} className={r.lane ? 'on-branch' : undefined}>
            <span className="graph" aria-hidden="true">
              <span className={`lane main ${r.main}`}>{r.dotLane === 0 && <i className="dot" />}</span>
              <span className={`lane side ${r.side}`}>{r.dotLane === 1 && <i className="dot" />}</span>
              {r.link && <span className="link" />}
            </span>
            <span className="sha" aria-hidden="true">
              {hash(r.msg)}
            </span>
            <span className="year">{r.year}</span>
            <span className={`type t-${r.type}`}>{r.type}</span>
            <span className="msg">
              {r.href ? <SmartLink href={r.href}>{r.msg}</SmartLink> : r.msg}
              {i === ROWS.length - 1 && (
                <>
                  {' '}
                  <span className="head" aria-hidden="true">
                    (HEAD -&gt; main)
                  </span>
                  <span className="sr-only">(latest)</span>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
