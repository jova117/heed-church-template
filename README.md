# HEED Church Template

A clean, ready-to-deploy demo template for multi-campus churches. This repo contains only the demo application—no marketing content.

## Quickstart

1. Install dependencies
   npm install

2. Run locally
   npm run dev

3. Type check & lint
   npm run type-check
   npm run lint

## Structure
- src/app/overflow-church-network: Demo app pages and components
- src/components: Shared components
- src/lib: Utilities (e.g., theme-utils)
- src/app/page.tsx: Redirects to /overflow-church-network

## Key providers (DX)
- Data: `src/app/overflow-church-network/data/data-provider.ts`
- Content: `src/app/overflow-church-network/data/content-provider.ts`
- Layout: `src/app/overflow-church-network/data/layout-provider.ts`

## Customize in 5 minutes
1. Church name and tagline:
   - Edit `CHURCH_INFO` in `src/app/overflow-church-network/data/church-config.ts`
2. Service times:
   - Update `serviceTimes` inside each campus in `CAMPUSES` in the same file
3. Campuses:
   - Add/remove/update entries in `CAMPUSES` in `src/app/overflow-church-network/data/church-config.ts`

## Deploy
- Vercel: click the button above, or set Root Directory to the repo root, Build Command `npm run vercel-build`, and Install Command `npm ci`.
- Local build: `npm run build` then `npm start`

## Screenshots
Add your screenshots here (e.g., home, campuses, small groups, sermons).

