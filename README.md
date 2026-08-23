# Renan Bazinin Portfolio

Personal portfolio site for [www.renanbazinin.com](https://www.renanbazinin.com), built with React, Vite, React Router, Framer Motion, and Lucide icons.

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

The site is hosted on Vercel (project `renanbazinin`) and serves the custom domain
`www.renanbazinin.com`. Build settings live in `vercel.json`: Vite framework preset,
`npm run build`, output to `dist/`, with a catch-all rewrite to `/index.html` so
client-side routes resolve on direct hits.

Pushing to `main` triggers a production deployment automatically. To deploy manually:

```bash
npm i -g vercel
vercel --prod
```

> The legacy `npm run deploy` (gh-pages) script predates the Vercel migration and is
> no longer used.
