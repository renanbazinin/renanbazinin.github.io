// About section timeline, oldest first, drawn as `git log --graph --reverse`.
// lane 0 is main; side branches use lane 1. `branch` opens a lane, `merge` closes it.
export const TIMELINE = [
  { year: '2015', type: 'init', lane: 0, msg: 'software-engineering track at the Davidson Institute' },
  { year: '2017', type: 'feat', lane: 0, msg: '2nd place in a regional high-school hackathon' },
  { year: '2017', type: 'branch', lane: 1, msg: 'idf: medic and platoon sergeant' },
  { year: '2019', type: 'feat', lane: 1, msg: 'Anamnezatron, a tool for writing medical notes', href: 'https://renanbazinin.github.io/Anamnezatron1/' },
  { year: '2019', type: 'award', lane: 1, msg: "Colonel's Award, IDF Medical Corps" },
  { year: '2020', type: 'merge', lane: 1, msg: 'idf -> main' },
  { year: '2020', type: 'fix', lane: 0, msg: 'COVID-19: vaccinating people as a Maccabi medic' },
  { year: '2021', type: 'feat', lane: 0, msg: 'KERNELiOS full-stack course' },
  { year: '2022', type: 'branch', lane: 1, msg: 'bsc: Computer Science at MTA' },
  { year: '2024', type: 'feat', lane: 1, msg: 'FocusFlow in Dr. Sarel Cohen’s lab', href: '/work/focusflow' },
  { year: '2025', type: 'release', lane: 1, msg: "Best Poster at SYSTOR '25, 1st place in MTA's research track" },
  { year: '2025', type: 'feat', lane: 1, msg: "Creative Foraging at Ono's Creative Action Lab", href: '/work/creative-foraging' },
  { year: '2025', type: 'feat', lane: 1, msg: 'nand2tetris Web IDE at Reichman', href: '/work/web-ide' },
  { year: '2026', type: 'merge', lane: 1, msg: 'bsc -> main: B.Sc. done' },
  { year: '2026', type: 'feat', lane: 0, msg: 'full-stack developer in fintech, AI agents' },
  { year: '2026', type: 'feat', lane: 0, msg: 'Forktown: a town built one pull request at a time', href: '/work/forktown' },
];
