# Isaac Ayodele | Full-Stack Engineer · AI Agents

Personal site for production work across web, mobile, and AI-powered products. Live at [isaacayodele.netlify.app](https://isaacayodele.netlify.app).

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with design tokens
- **Icons**: Lucide React
- **Content**: Markdown blog (remark/rehype, shiki highlighting), typed data in `src/data`
- **Hosting**: Netlify

## Design system

"Drafting table": ink-navy sheet (drafting-paper cream in light mode), blue linework, one vermilion `--signal` colour for what is live or actionable, Instrument Serif italic for emphasis, mono annotations. Tokens live in `src/app/globals.css`; section headers use `SectionHead` and the `.sheet-label` utility. Real screenshots go in each project's `screenshots` (set `device: 'phone' | 'browser'` for frames) and optionally `cardImage` for the Work card.

## Features

- Animated architecture blueprints (`components/ui/Blueprint`), used in the hero and every flagship case study
- Command palette (Cmd/Ctrl+K, or `/`) with a deterministic "Ask Isaac" Q&A answered from site data (`lib/ask.ts`), no LLM calls
- Dark/light/system theme with no-flash persistence, scroll progress, scroll reveals (all respect reduced motion)
- On-site `/resume`, RSS at `/rss.xml`, per-page canonicals, per-project and per-post OG images, JSON-LD
- Drafts: set `draft: true` in a post's front matter. Drafts show in `yarn dev` and are excluded from production builds

## Architecture

```
src/
├── app/                    # App Router pages, sitemap, robots, OG image
├── assets/                 # Images
├── components/
│   ├── layout/            # Navbar, Footer, CommandPalette
│   ├── sections/          # Homepage sections
│   └── ui/                # Shared UI
├── content/blogs/         # Markdown posts
├── lib/                   # Blog pipeline, OG images, theme, Ask Isaac
└── data/                  # Typed content (experiences, projects, blueprints, ...)
```

## Development

```bash
yarn install
yarn dev
yarn lint
yarn build
```

Node 20 (see `.nvmrc`). Connecting a custom domain: see [DOMAIN_SETUP.md](./DOMAIN_SETUP.md).

## License

MIT
