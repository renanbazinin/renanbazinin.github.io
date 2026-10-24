// Newest first. Dates follow LinkedIn, except the Ono role, which follows the CV.
export const EXPERIENCE = [
  {
    dates: 'Feb 2026 – Present',
    role: 'Full-Stack Developer',
    org: 'Fintech company',
    bullets: [
      "Develop an internal AI assistant (chatbot app) for the company's employees, front end and back end.",
      'Build AI agent capabilities that take it beyond plain Q&A.',
      'Own features end to end in a regulated environment, working with cross-functional teams.',
    ],
  },
  {
    dates: 'Sep 2025 – Feb 2026',
    role: 'Software Developer and Research Assistant, nand2tetris Web IDE',
    org: 'Reichman University',
    bullets: [
      'Teaching staff for the Nand to Tetris course; supported learners on Coursera.',
      '6 merged PRs to nand2tetris/web-ide (TypeScript + React): a React rewrite of the Bitmap Editor that generates Jack and Hack code, a Settings redesign, new tooltips and a Jack compiler fix.',
      'Added the Bitmap Editor and File System guides.',
    ],
    link: { label: 'case study', href: '/work/web-ide' },
  },
  {
    dates: '2025 – 2026',
    role: 'Software Engineer, Creative Action Lab',
    org: 'Ono Academic College',
    bullets: [
      'Built a real-time behavioral research platform for the Creative Foraging Game with Flask, MongoDB and MediaPipe.',
      'Built an AI-agent version in which Gemini plays the game; it was the demo for our HAI 2025 paper (co-author).',
    ],
    link: { label: 'case study', href: '/work/creative-foraging' },
  },
  {
    dates: 'Nov 2024 – Aug 2025',
    role: 'Software Developer, FocusFlow (B.Sc. research project)',
    org: "Dr. Sarel Cohen's AI lab, MTA",
    bullets: [
      'Team of three with Alona Gatker and Jonatan Shaya.',
      'Trained the engagement classifier on MediaPipe face landmarks and ran it in the browser with ONNX Runtime Web.',
      'Built the Flask + Gemini back end for quizzes and summaries (Docker, GCP) and React features.',
      'ACM SYSTOR 2025 Best Poster Award; 1st place in the research and infrastructure track of the MTA exhibition; demo paper at AIED 2025.',
    ],
    link: { label: 'case study', href: '/work/focusflow' },
  },
  {
    dates: '2022 – 2026',
    role: 'B.Sc. in Computer Science',
    org: 'The Academic College of Tel Aviv-Yaffo (MTA)',
    bullets: ['GPA 83.3.'],
  },
  {
    dates: 'Dec 2020 – Apr 2022',
    role: 'Vaccination Medic',
    org: 'Maccabi Health Care Services',
    bullets: [
      'Called up for reserve duty to vaccinate during COVID-19, then hired by Maccabi to keep vaccinating.',
      'Completed the KERNELiOS Java full-stack course (447 hours, Nov 2021 – Feb 2022): Java, SQL and web development, with a final project in React, Node.js and MongoDB.',
    ],
  },
  {
    dates: 'Nov 2017 – Jul 2020',
    role: 'Medic and Platoon Sergeant',
    org: 'Israel Defense Forces',
    bullets: [
      'Ran logistics and operational execution in an IDF clinic.',
      'Built a VBA HR tool for the clinic and, as a personal project, Anamnezatron, a JavaScript tool for writing medical records.',
      "Received the Colonel's Award (Oct 2019).",
    ],
  },
  {
    dates: '2015 – 2017',
    role: 'Software-engineering track',
    org: 'Davidson Institute, high school',
    bullets: [
      'Hackathons (2nd place in a regional high-school hackathon, 2017) and teaching at a science summer camp for middle schoolers.',
      'Mentored FIRST LEGO League robotics teams (2016 – 2021).',
    ],
  },
];
