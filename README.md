# jamessingleton.me

My personal website: a Next.js 16 site and a standalone Sanity Studio in one
pnpm + Turborepo monorepo, based on Roboto Studio's
[Turbo Start Sanity](https://github.com/robotostudio/turbo-start-sanity).

- `apps/web` — Next.js 16 (App Router, Cache Components, Sanity Live, Visual Editing)
- `apps/studio` — Sanity Studio 6 (project `yp0fvwoh`, dataset `production`)
- `packages/*` — shared Sanity queries, page-builder blocks, UI and config

## Getting started

Requires Node 24+ and pnpm 11.24 (`corepack enable`).

```sh
pnpm install
cp apps/web/.env.example apps/web/.env.local
cp apps/studio/.env.example apps/studio/.env
pnpm dev
```

Fill in `NEXT_PUBLIC_SANITY_PROJECT_ID=yp0fvwoh` and
`NEXT_PUBLIC_SANITY_DATASET=production` for the web app, and
`SANITY_STUDIO_PROJECT_ID` / `SANITY_STUDIO_DATASET` for the Studio. The site
runs on `http://localhost:3000` and the Studio on `http://localhost:3333`. A
`SANITY_API_READ_TOKEN` (Viewer) is only needed for drafts and live previews.

## Common tasks

```sh
pnpm lint && pnpm check-types && pnpm test
pnpm --filter studio extract && pnpm type   # after schema or query changes
pnpm build
```

`CLAUDE.md` documents the architecture, the page-builder blocks and the
conventions in detail.
