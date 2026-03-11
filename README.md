# Fire Horse Calendar Break-Even Microsite

Minimal Next.js microsite for visualizing break-even progress on the Year of the Fire Horse Calendar project.

## Stack

- Next.js (App Router)
- TypeScript
- CSS Modules
- React hooks

## Local Development

Use Node `22.22.0`.

```bash
nvm use 22.22.0
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Data

Project figures are defined in [data/figures.ts](/Users/brian/Documents/00-cobalt/20260311--higher-zip--progress-bar/code/data/figures.ts).

This file contains:

- revenue inputs
- grouped cost inputs
- derived totals
- break-even progress helpers

## Structure

```text
app/
  layout.tsx
  page.tsx
components/
  Breakdown.tsx
  ProgressBar.tsx
  SegmentedBar.tsx
data/
  figures.ts
styles/
  page.module.css
  ProgressBar.module.css
  SegmentedBar.module.css
```

## Notes

- The main progress bar shows revenue against total costs.
- The segmented cost bar shows category-level cost allocation.
- Hovering or focusing a cost section highlights the matching cost segment.
- The UI uses the palette defined in `app/globals.css`.
