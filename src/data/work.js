// Selected work, in the order it appears on the home page.
// Items with `caseStudy` also get a page at /work/<slug>.
// Numbers were checked against the repos and CI on 2026-10-24.

export const WORK = [
  {
    slug: 'ai-assistant',
    title: 'Enterprise AI assistant',
    tag: 'work',
    role: 'Full-stack developer · fintech · Feb 2026 – present',
    summary:
      "The AI assistant employees use at work. I build its agent features and own them end to end, front end to back end.",
    chips: ['AI agents', 'Full stack'],
    links: [],
  },
  {
    slug: 'focusflow',
    title: 'FocusFlow',
    tag: 'research',
    role: "Team of 3 · Dr. Sarel Cohen's AI lab, MTA · Nov 2024 – Aug 2025",
    summary:
      'Pauses a video lecture when your attention drifts and asks you about what you missed. I trained the on-device engagement model and built the Flask + Gemini back end.',
    chips: ['Best Poster, SYSTOR 2025', '1st place, MTA research track', 'AIED 2025 demo'],
    image: { src: '/work/focusflow.webp', alt: 'FocusFlow logo: a blue eye inside a wave of water' },
    links: [
      { label: 'live', href: 'https://the-jar-team.github.io/focus-flow-client-offline-backup/' },
      { label: 'code', href: 'https://github.com/The-JAR-Team/focus-flow-client' },
      { label: 'video', href: 'https://youtu.be/6DzAMohd6tg' },
      { label: 'paper', href: 'https://doi.org/10.1145/3757347.3759153' },
    ],
    caseStudy: true,
  },
  {
    slug: 'forktown',
    title: 'Forktown',
    tag: 'open source',
    role: 'Creator and maintainer · Sep 2026 – present',
    summary:
      "A pixel town for first-time contributors: each house is one pull request, checked and merged by GitHub Actions.",
    chips: ['137 merged PRs', '53 from 46 other people', '400 tests'],
    image: { src: '/work/forktown.webp', alt: 'Forktown on a summer evening: an isometric pixel town with houses, a football pitch, a lake and an outdoor cinema' },
    links: [
      { label: 'live', href: 'https://renanbazinin.github.io/forktown/' },
      { label: 'code', href: 'https://github.com/renanbazinin/forktown' },
      { label: 'move in', href: 'https://github.com/renanbazinin/forktown/blob/main/CONTRIBUTING.md' },
    ],
    caseStudy: true,
  },
  {
    slug: 'web-ide',
    title: 'nand2tetris Web IDE',
    tag: 'open source',
    role: 'Software developer and research assistant · Reichman University · Sep 2025 – Feb 2026',
    summary:
      'The official browser IDE of the Nand to Tetris course. I rewrote its Bitmap Editor in React, redesigned Settings and fixed compiler and tooltip bugs.',
    chips: ['6 merged PRs', 'TypeScript', 'React'],
    image: { src: '/work/web-ide.webp', alt: 'The nand2tetris Bitmap Editor with the letters RB drawn on the grid and the generated Jack code beside it' },
    links: [
      { label: 'live', href: 'https://nand2tetris.github.io/web-ide/bitmap' },
      { label: 'my PRs', href: 'https://github.com/nand2tetris/web-ide/pulls?q=is%3Apr+author%3Arenanbazinin+is%3Amerged' },
      { label: 'videos', href: 'https://www.youtube.com/playlist?list=PL2Ax_RzWfz_MrxH8cWVd7oXSLknUz6xqT' },
    ],
    caseStudy: true,
  },
  {
    slug: 'creative-foraging',
    title: 'Creative Foraging Game',
    tag: 'research',
    role: 'Creative Action Lab, Ono Academic College · 2025 – 2026',
    summary:
      'Browser software for a cognitive-science task: a lab research platform, an AI player for our HAI 2025 paper, and a build that tracks two players with MediaPipe.',
    chips: ['HAI 2025 paper', 'MediaPipe', '82 tests'],
    image: { src: '/work/creative-foraging.webp', alt: 'A Creative Foraging figure made of ten blocks next to the title Creative Foraging' },
    links: [
      { label: 'live', href: 'https://renanbazinin.github.io/creative-foraging-game-local/' },
      { label: 'code', href: 'https://github.com/renanbazinin/creative-foraging-game-local' },
      { label: 'paper', href: 'https://doi.org/10.1145/3765766.3765859' },
    ],
    caseStudy: true,
  },
  {
    slug: 'open-source',
    title: 'Open source',
    tag: 'open source',
    role: 'Contributor',
    summary: 'I contribute to open-source projects I use: TimeScribe, Open Notebook, nand2tetris and iptv-org.',
    chips: [],
    links: [
      { label: 'contributions', href: '/#open-source' },
      { label: 'GitHub', href: 'https://github.com/renanbazinin' },
    ],
  },
];

// Long-form pages. Keep every claim checkable against the linked code, PRs or papers.
export const CASE_STUDIES = {
  forktown: {
    title: 'Forktown',
    subtitle: 'A pixel town where every house is a pull request.',
    description:
      'Forktown: an open-source pixel town for first-time contributors. 137 merged PRs, 53 of them from 46 other people. React, TypeScript and GitHub Actions.',
    facts: [
      ['Role', 'Creator and maintainer'],
      ['Dates', 'Sep 2026 – present'],
      ['Stack', 'React 19, TypeScript, Canvas 2D, Zod, Vitest, GitHub Actions'],
    ],
    problem:
      "A first open-source pull request is a big step, and most projects don't have a change small enough, safe enough and visible enough for a beginner. I wanted a place where the whole real flow (fork, branch, commit, pull request, CI, review, merge) ends with something you can see.",
    built: [
      'Each house is one JSON file in places/. A strict Zod schema is shared by the CLI validator, the app loader and the in-browser house builder, and CI writes per-file annotations when a house is invalid.',
      "A merge policy in GitHub Actions: a contributor's first house that touches nothing else merges itself once every check passes. The workflow only runs trusted code from the default branch and reads PR files through the API as data. Links, folders and executable files are refused in places/, and changes to the app, .github/, agent-instruction files or someone else's house wait for maintainer review.",
      'A browser flow for people who have never used git: the builder opens a prefilled new-file page on GitHub, so a first PR needs no install.',
      'The town itself: an isometric React 19 + Canvas 2D app with residents who keep their own routines, a 24-minute day/night cycle, seasons, football matches and an outdoor cinema with procedurally drawn films.',
      'A private "town hall" dashboard for workshops that shows each open PR\'s stage and who it is waiting on, streamed live to a projector view.',
    ],
    results: [
      '137 merged PRs since the September 2026 launch; 53 of them from 46 other people (as of October 2026).',
      '37 outside PRs were merged automatically by the policy, with no maintainer action.',
      '49 forks, 59 houses, and 400 Vitest tests in CI.',
    ],
    image: { src: '/work/forktown.webp', alt: 'Forktown on a summer evening: an isometric pixel town with houses, a football pitch, a lake and an outdoor cinema' },
    links: [
      { label: 'Live town', href: 'https://renanbazinin.github.io/forktown/' },
      { label: 'Live view', href: 'https://renanbazinin.github.io/forktown/live/' },
      { label: 'Code', href: 'https://github.com/renanbazinin/forktown' },
      { label: 'Move in', href: 'https://github.com/renanbazinin/forktown/blob/main/CONTRIBUTING.md' },
    ],
  },
  focusflow: {
    title: 'FocusFlow',
    subtitle: 'Engagement tracking for video lectures, running on your own device.',
    description:
      'FocusFlow: engagement tracking for video lectures with an on-device model and Gemini-generated questions. ACM SYSTOR 2025 Best Poster Award.',
    facts: [
      ['Role', 'Developer, team of 3 (with Alona Gatker and Jonatan Shaya)'],
      ['Supervisor', 'Dr. Sarel Cohen, AI lab, MTA'],
      ['Dates', 'Nov 2024 – Aug 2025'],
      ['Stack', 'React, MediaPipe, ONNX Runtime Web, PyTorch, Flask, Gemini API, Docker, GCP'],
    ],
    problem:
      "In a recorded lecture it's easy to drift off without noticing, and the person teaching never learns where attention dropped. We wanted the player itself to notice and help you catch up, without sending video of your face to a server.",
    built: [
      'I trained the engagement classifier on MediaPipe face-landmark features and ran it in the browser with ONNX Runtime Web, so the classification happens on the viewer\'s device.',
      'When engagement drops, the video pauses and asks Gemini-generated questions about what you missed. I built the Flask back end on the Gemini API for these quizzes and for summaries, packaged with Docker for Google Cloud.',
      'React features: the ONNX monitor, the groups dashboard and the summaries view.',
    ],
    results: [
      'Best Poster Award at ACM SYSTOR 2025 for "FocusFlow: A Real-Time Engagement System Enabled by Client-Side Inference".',
      "1st place in the research and infrastructure track of MTA's 2025 final-project exhibition (about 70 projects).",
      'Demo paper at AIED 2025 in Italy.',
    ],
    image: { src: '/work/focusflow.webp', alt: 'FocusFlow logo: a blue eye inside a wave of water' },
    links: [
      { label: 'Live (offline build)', href: 'https://the-jar-team.github.io/focus-flow-client-offline-backup/' },
      { label: 'Code', href: 'https://github.com/The-JAR-Team/focus-flow-client' },
      { label: 'Demo video', href: 'https://youtu.be/rn9GOevDAbk' },
      { label: 'AIED video', href: 'https://youtu.be/6DzAMohd6tg' },
      { label: 'SYSTOR paper', href: 'https://doi.org/10.1145/3757347.3759153' },
    ],
  },
  'web-ide': {
    title: 'nand2tetris Web IDE',
    subtitle: 'Six merged PRs in the official IDE of the Nand to Tetris course.',
    description:
      'My 6 merged PRs to the nand2tetris Web IDE (TypeScript + React): a React rewrite of the Bitmap Editor, a Settings redesign and a Jack compiler fix.',
    facts: [
      ['Role', 'Software developer and research assistant (teaching staff), Reichman University'],
      ['Dates', 'Sep 2025 – Feb 2026'],
      ['Stack', 'TypeScript, React, SCSS'],
    ],
    problem:
      'Nand to Tetris students build a computer from logic gates up, and they do it in a browser IDE. The Bitmap Editor, which students use to draw sprites for their Jack games, was a standalone 1,357-line HTML file that sat outside the React app.',
    built: [
      'PR #627: rewrote the Bitmap Editor (originally by Erik Umble) as a React page. New utilities encode each row as 16-bit two\'s-complement words and generate both Jack Memory.poke code and Hack assembly, and the drawing is saved in local storage.',
      'PR #619: redesigned the Settings page and added the File System guide.',
      'PR #615: replaced the CSS tooltips with a React portal that measures itself and picks the side that fits in the viewport.',
      'PR #601: fixed a Jack compiler editing bug. PR #597 added the Bitmap Editor user guide, and PR #626 uploaded the course staff\'s updated user guides.',
      'Outside the IDE: a release-packaging workflow for nand2tetris/projects (PR #6) and a browser grader that runs a project ZIP against the course tests.',
    ],
    results: [
      'All 6 PRs were reviewed and merged by the maintainer and run on nand2tetris.github.io/web-ide.',
      'Supported course learners on Coursera as part of the teaching staff.',
    ],
    image: { src: '/work/web-ide.webp', alt: 'The nand2tetris Bitmap Editor with the letters RB drawn on the grid and the generated Jack code beside it' },
    links: [
      { label: 'Bitmap Editor (live)', href: 'https://nand2tetris.github.io/web-ide/bitmap' },
      { label: 'My merged PRs', href: 'https://github.com/nand2tetris/web-ide/pulls?q=is%3Apr+author%3Arenanbazinin+is%3Amerged' },
      { label: 'PR #627', href: 'https://github.com/nand2tetris/web-ide/pull/627' },
      { label: 'Bitmap Editor guide', href: 'https://nand2tetris.github.io/web-ide/user_guide/bitmap_editor.pdf' },
      { label: 'Videos', href: 'https://www.youtube.com/playlist?list=PL2Ax_RzWfz_MrxH8cWVd7oXSLknUz6xqT' },
      { label: 'Browser grader', href: 'https://renanbazinin.github.io/n2tgrader-node/' },
    ],
  },
  'creative-foraging': {
    title: 'Creative Foraging Game',
    subtitle: 'Research software for a cognitive-science task, from lab platform to AI agent.',
    description:
      "Creative Foraging Game software for Ono's Creative Action Lab: a research platform, an AI-agent version (HAI 2025 paper) and a browser-only build.",
    facts: [
      ['Role', 'Software engineer, Creative Action Lab, Ono Academic College'],
      ['Dates', '2025 – 2026'],
      ['Paper', "HAI '25, co-author (3rd of 10)"],
      ['Stack', 'React, Flask, Express, MongoDB, MediaPipe, Gemini API, Vitest'],
    ],
    problem:
      'In the Creative Foraging Game (Hart et al., PLOS ONE 2017) players move ten connected blocks on a grid and save the shapes they like. The lab needed versions of the task for new experiments: with motion tracking, with an AI player, and with two players at once.',
    built: [
      'A real-time behavioral research platform with Flask, MongoDB and MediaPipe.',
      'An AI-agent version: the server checks the board (exactly ten blocks, all connected), lists every legal move, asks Gemini to make a move and guess the shape, then re-checks the board Gemini returns. It was the demo for our HAI 2025 paper.',
      'A two-player online version that records both webcams and keeps every move in sync with the video using NTP-style clock samples (private code).',
      'A browser-only build with no back end: MediaPipe hand tracking and wrist-color detection guess which of two players made each move, and every session is saved as JSON and CSV to a folder the researcher picks. It has 82 Vitest tests in CI and installs as a PWA.',
    ],
    results: [
      'Co-author of "Creative Foraging Game with AI: How Humans and AI Explore and Exploit Together", HAI \'25.',
      'The browser-only build runs in desktop Chrome or Edge with nothing to install.',
    ],
    image: { src: '/work/creative-foraging.webp', alt: 'A Creative Foraging figure made of ten blocks next to the title Creative Foraging' },
    links: [
      { label: 'Live (desktop Chrome/Edge)', href: 'https://renanbazinin.github.io/creative-foraging-game-local/' },
      { label: 'Code', href: 'https://github.com/renanbazinin/creative-foraging-game-local' },
      { label: 'AI-agent server code', href: 'https://github.com/renanbazinin/creative-forging-ai-server' },
      { label: 'HAI paper', href: 'https://doi.org/10.1145/3765766.3765859' },
    ],
  },
};
