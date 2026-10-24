// Publications newest first. `authors` lists names in paper order; `with` is used
// when the order is not on record.
export const PUBLICATIONS = [
  {
    title: 'Creative Foraging Game with AI: How Humans and AI Explore and Exploit Together',
    venue: "HAI '25",
    venueLong: '13th International Conference on Human-Agent Interaction, poster paper, November 2025',
    authors: ['S. Cohen', 'P. Smadja', 'R. Bazinin', 'R. Briq', 'L. Kashi', 'S. Levy', 'O. Lerner', 'M. Mashhadi', 'D. Shoshan', 'L. Noy'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1145/3765766.3765859' },
      { label: 'AI-agent code', href: 'https://github.com/renanbazinin/creative-forging-ai-server' },
    ],
  },
  {
    title: 'FocusFlow: A Real-Time Engagement System Enabled by Client-Side Inference',
    venue: "SYSTOR '25",
    venueLong: '18th ACM International Systems and Storage Conference, poster paper, September 2025',
    authors: ['R. Bazinin', 'S. Cohen', 'A. Gatker', 'J. Shaya'],
    award: 'Best Poster Award',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1145/3757347.3759153' },
      { label: 'Demo video', href: 'https://youtu.be/rn9GOevDAbk' },
      { label: 'Code', href: 'https://github.com/The-JAR-Team/focus-flow-client' },
    ],
  },
  {
    title: 'FocusFlow: AI-Driven Engagement Monitoring and Interaction for Educational Videos',
    venue: "AIED '25",
    venueLong: 'International Conference on Artificial Intelligence in Education, Demo Track, Italy, July 2025',
    with: 'With Alona Gatker, Jonatan Shaya and Sarel Cohen',
    links: [{ label: 'Video', href: 'https://youtu.be/6DzAMohd6tg' }],
  },
];

export const AWARDS = [
  { date: 'Sep 2025', title: 'Best Poster Award, ACM SYSTOR 2025', detail: 'FocusFlow poster paper, with Sarel Cohen, Alona Gatker and Jonatan Shaya.' },
  { date: 'Jul 2025', title: '1st place, research and infrastructure track, MTA final-project exhibition', detail: 'FocusFlow. The exhibition had about 70 projects.' },
  { date: 'Oct 2019', title: "Certificate of Excellence (Colonel's Award), IDF Medical Corps", detail: 'For my work as a platoon sergeant in an IDF clinic.' },
  { date: '2017', title: '2nd place, regional high-school hackathon', detail: 'One of several hackathons I joined in high school.' },
];

// Upstream contributions, linked to the PRs themselves.
export const OPEN_SOURCE = [
  {
    repo: 'nand2tetris/web-ide',
    what: '6 merged PRs: Bitmap Editor rewrite, Settings redesign, tooltips, a Jack compiler fix and user guides.',
    href: 'https://github.com/nand2tetris/web-ide/pulls?q=is%3Apr+author%3Arenanbazinin+is%3Amerged',
  },
  {
    repo: 'WINBIGFOX/TimeScribe',
    what: 'Right-to-left layout and Hebrew/Arabic translations (107 files, with tests), shipped in v1.17.0.',
    href: 'https://github.com/WINBIGFOX/TimeScribe/pull/134',
  },
  {
    repo: 'lfnovo/open-notebook',
    what: "App-wide right-to-left direction and Arabic support, continuing naifs2015's Arabic translation PR (#1277). Open PR, marked by the maintainer as the canonical one for Arabic.",
    href: 'https://github.com/lfnovo/open-notebook/pull/1367',
  },
  {
    repo: 'nand2tetris/projects',
    what: 'Release-packaging workflow.',
    href: 'https://github.com/nand2tetris/projects/pull/6',
  },
  {
    repo: 'iptv-org/iptv',
    what: '3 merged PRs to the Israeli channel list: two new streams (i24, Now 14) and an i24 URL fix.',
    href: 'https://github.com/iptv-org/iptv/pulls?q=is%3Apr+author%3Arenanbazinin+is%3Amerged',
  },
];
