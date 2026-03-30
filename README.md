# Isaac Ayodele | Senior Software Engineer Portfolio

A production-grade portfolio built with Next.js 15, TypeScript, and modern CSS architecture. Demonstrates clean code practices, component-driven development, and performance optimization.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with design tokens
- **Icons**: Lucide React
- **Deployment**: Vercel

## Architecture

```
src/
├── app/                    # Next.js App Router pages
├── assets/                 # Static assets (images)
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Page sections (Hero, Experience, RecentWork)
│   └── ui/                # Reusable UI components (ProjectCard, BlogPostCard)
└── data/                  # Centralized data and type definitions
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Key Features

- **Type-safe data layer** with centralized types
- **Component-driven architecture** with clear separation of concerns
- **Responsive design** with mobile-first approach
- **Dark/Light theme** with system preference detection
- **Accessible** with proper ARIA labels and keyboard navigation
- **Performance optimized** with Next.js Image optimization

## License

MIT
