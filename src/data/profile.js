// Contact details and one-line facts used across the site.
export const PROFILE = {
  name: 'Renan Bazinin',
  role: 'Full-stack developer',
  email: 'renanbazinin2@gmail.com',
  github: 'https://github.com/renanbazinin',
  linkedin: 'https://www.linkedin.com/in/renan-bazinin',
  cv: '/Renan-Bazinin-CV.pdf',
  site: 'https://renanbazinin.com',
  stack: ['React', 'TypeScript', 'Node.js', 'Python'],
  degree: 'B.Sc. Computer Science, MTA',
  languages: 'Hebrew (native), English (fluent)',
};

export const HERO = {
  lead: 'Full-stack developer in fintech.',
  intro: 'I build an AI assistant and its agent features. Outside work: research, open source and Forktown.',
};

// Highlights under the hero, printed like `cat highlights.txt`. Each line links to its evidence.
export const PROOF = [
  { key: 'AI agents in production', value: 'fintech, 2026', href: '/#work' },
  { key: 'Best Poster Award', value: 'ACM SYSTOR 2025', href: 'https://doi.org/10.1145/3757347.3759153' },
  { key: '3 co-authored papers', value: 'SYSTOR · AIED · HAI', href: '/#research' },
  {
    key: '40+ people moved into Forktown',
    value: 'one PR per house',
    href: 'https://github.com/renanbazinin/forktown/pulls?q=is%3Apr+is%3Amerged+-author%3Arenanbazinin+-author%3Arenabazinin',
  },
];

export const ABOUT = [
  "I'm a full-stack developer. Since February 2026 I've worked in fintech on an internal AI assistant for employees, where I build agent capabilities and own features from the front end to the back end.",
  "Before that I wrote research software. I was one of three developers of FocusFlow in Dr. Sarel Cohen's lab at MTA, built software for the Creative Foraging Game at Ono Academic College's Creative Action Lab, and worked on the nand2tetris Web IDE as teaching staff at Reichman University. The FocusFlow and Creative Foraging work led to three co-authored papers (ACM SYSTOR 2025, AIED 2025, HAI 2025) and the SYSTOR 2025 Best Poster Award.",
  "I started coding in middle school and did the software-engineering track at the Davidson Institute. As an IDF medic and platoon sergeant (2017–2020) I wrote a VBA HR tool for the clinic, built Anamnezatron for drafting medical records as a personal project, and received the Colonel's Award. I have a B.Sc. in Computer Science from MTA (GPA 83.3).",
  'I also run Forktown, an open-source pixel town for first-time contributors. If you want to talk about AI agents in real products, on-device ML or open source, email me.',
];

export const SKILLS = [
  { group: 'Front end', items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Vite'] },
  { group: 'Back end', items: ['Node.js', 'Express', 'Python', 'Flask', 'FastAPI', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL', 'ChromaDB'] },
  { group: 'AI / ML', items: ['Gemini API', 'OpenAI', 'PyTorch', 'ONNX Runtime', 'MediaPipe', 'Transformers.js'] },
  { group: 'Ops', items: ['Docker', 'GCP', 'GitHub Actions', 'Vercel'] },
  { group: 'Also', items: ['Java', 'C++', 'C#', 'VBA'] },
];
