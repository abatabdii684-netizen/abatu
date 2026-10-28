# Abatu Abdi — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS v4 and Lucide icons.

## Setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview
```

## Editing content
All content (profile, skills, projects, education) lives in `src/data/portfolioData.js`.
- Portrait: put a file in `public/images/` and set `profile.image`.
- LinkedIn: set `profile.linkedin` to a verified URL.
- GraduateConnect: fill in `tech` and `repo` once verified.

## Push to GitHub
```bash
git add . && git commit -m "Portfolio"
git remote add origin https://github.com/abatabdii684-netizen/abatu.git   # if not set
git push -u origin main
```

## Deploy on Vercel
1. Sign in at vercel.com with GitHub and click **Add New → Project**.
2. Import the repository.
3. Framework preset: Vite; build command `npm run build`; output directory `dist` (also set in `vercel.json`).
4. Click **Deploy**.
