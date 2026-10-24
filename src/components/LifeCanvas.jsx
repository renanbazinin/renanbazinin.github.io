import { useEffect, useRef } from 'react';

const CELL = 12;
// Clear space kept around elements marked data-life-avoid (the text column, terminal, button).
const AVOID_PAD = 10;
const STEP_MS = 200;

// Conway's Game of Life (B3/S23) behind the hero. Decorative only: it stops when the
// tab is hidden, the hero is off screen or `paused` is set, and draws a single still
// frame under prefers-reduced-motion. Cells keep evolving everywhere, but they are not
// drawn behind elements marked data-life-avoid, so the text always sits on a clear field.
export default function LifeCanvas({ paused = false }) {
  const ref = useRef(null);
  const pausedRef = useRef(paused);
  const syncRef = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cols = 0;
    let rows = 0;
    let grid = new Uint8Array(0);
    let seed = 7;
    let timer = 0;
    let visible = true;
    let stale = 0;

    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    const fill = (density) => {
      for (let i = 0; i < grid.length; i++) grid[i] = rnd() < density ? 1 : 0;
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      // Size the bitmap to the CSS box itself (not to whole cells), so it is never rescaled.
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const bw = Math.max(1, Math.round(width * dpr));
      const bh = Math.max(1, Math.round(height * dpr));
      if (bw !== canvas.width || bh !== canvas.height) {
        canvas.width = bw;
        canvas.height = bh;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      const nextCols = Math.max(1, Math.ceil(width / CELL));
      const nextRows = Math.max(1, Math.ceil(height / CELL));
      if (nextCols === cols && nextRows === rows) return;
      cols = nextCols;
      rows = nextRows;
      grid = new Uint8Array(cols * rows);
      fill(0.16);
      for (let i = 0; i < 4; i++) step();
    };

    const step = () => {
      const next = new Uint8Array(grid.length);
      let alive = 0;
      let changed = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let n = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx || dy) n += grid[((y + dy + rows) % rows) * cols + ((x + dx + cols) % cols)];
            }
          }
          const i = y * cols + x;
          const v = n === 3 || (n === 2 && grid[i]) ? 1 : 0;
          next[i] = v;
          alive += v;
          if (v !== grid[i]) changed++;
        }
      }
      grid = next;
      // Reseed when the board dies out or settles into still lifes and blinkers.
      stale = changed < cols * rows * 0.004 ? stale + 1 : 0;
      if (alive < cols * rows * 0.03 || stale > 40) {
        fill(0.16);
        stale = 0;
      }
    };

    const clearZones = () => {
      const base = canvas.getBoundingClientRect();
      return [...(canvas.parentElement?.querySelectorAll('[data-life-avoid]') ?? [])].map((el) => {
        const r = el.getBoundingClientRect();
        return {
          x0: r.left - base.left - AVOID_PAD,
          y0: r.top - base.top - AVOID_PAD,
          x1: r.right - base.left + AVOID_PAD,
          y1: r.bottom - base.top + AVOID_PAD,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, cols * CELL, rows * CELL);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--cell').trim() || '#23305a';
      const zones = clearZones();
      for (let y = 0; y < rows; y++) {
        const py = y * CELL;
        for (let x = 0; x < cols; x++) {
          if (!grid[y * cols + x]) continue;
          const px = x * CELL;
          if (zones.some((z) => px + CELL > z.x0 && px < z.x1 && py + CELL > z.y0 && py < z.y1)) continue;
          ctx.fillRect(px + 1, py + 1, CELL - 3, CELL - 3);
        }
      }
    };

    const stop = () => {
      clearInterval(timer);
      timer = 0;
    };
    const start = () => {
      if (timer || pausedRef.current || reduce.matches || !visible || document.hidden) return;
      timer = setInterval(() => {
        step();
        draw();
      }, STEP_MS);
    };
    const sync = () => {
      stop();
      draw();
      start();
    };
    syncRef.current = sync;

    resize();
    draw();
    start();

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);
    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const scheme = window.matchMedia('(prefers-color-scheme: light)');
    document.addEventListener('visibilitychange', sync);
    reduce.addEventListener('change', sync);
    scheme.addEventListener('change', draw);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduce.removeEventListener('change', sync);
      scheme.removeEventListener('change', draw);
      syncRef.current = null;
    };
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    syncRef.current?.();
  }, [paused]);

  return <canvas ref={ref} className="life" aria-hidden="true" />;
}
