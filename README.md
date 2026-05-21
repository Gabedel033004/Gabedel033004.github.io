# Personal Portfolio — Next.js

A clean, minimal personal website built with Next.js 14 (App Router) and TypeScript.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Project structure

```
src/
  app/
    page.tsx              ← Home
    professional/         ← Work history & skills
    personal/             ← Bio & values
    interests/            ← Interests grid
    resume/               ← Contact info & résumé download
    blog/                 ← Blog post list
    projects/             ← Placeholder (customise freely)
    travel/               ← Placeholder (customise freely)
  components/
    Nav.tsx               ← Sticky navigation bar
  styles/
    globals.css           ← Design tokens & shared styles
public/
  resume.pdf              ← Drop your PDF here for the download button
```

## Customising your content

All content is just data in each `page.tsx` file — no CMS needed.

| What to change | Where |
|---|---|
| Your name & headline | `src/app/page.tsx` (hero section) |
| Work history | `src/app/professional/page.tsx` → `experience` array |
| Skills | `src/app/professional/page.tsx` → `skillGroups` array |
| Bio & values | `src/app/personal/page.tsx` |
| Interests | `src/app/interests/page.tsx` → `interests` array |
| Contact details | `src/app/resume/page.tsx` → `contactItems` array |
| Blog posts | `src/app/blog/page.tsx` → `posts` array |
| Nav tabs | `src/components/Nav.tsx` → `links` / `moreLinks` arrays |

## Adding a résumé PDF

Drop your PDF into `/public/resume.pdf`. The download button on the Résumé page will work automatically.

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
```

## Deploying to Vercel (recommended — easiest)

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Next.js and deploys in ~30 seconds. Free tier is plenty for a personal site.
