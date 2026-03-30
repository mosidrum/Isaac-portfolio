import type { ToolCategory } from './types';

/**
 * Development environment and tooling setup.
 * Organized by category for clear presentation.
 */
export const toolCategories: ToolCategory[] = [
  {
    category: 'Hardware',
    items: [
      {
        name: 'MacBook Pro 16" (2019)',
        description:
          'Intel Core i7, 16GB RAM, 512GB SSD. Reliable workhorse for development. Planning upgrade to M-series for improved build times.'
      },
      {
        name: 'HP EliteBook 840 G8',
        description:
          'Secondary machine for testing cross-platform compatibility and running isolated development environments.'
      },
      {
        name: '4K External Monitor',
        description:
          'High-resolution display for comfortable extended coding sessions. Essential for reviewing large codebases and side-by-side comparisons.'
      },
      {
        name: 'Noise-Cancelling Headphones',
        description: 'Critical for deep work sessions and maintaining focus in any environment.'
      },
      {
        name: 'Ergonomic Setup',
        description:
          'Adjustable standing desk and ergonomic chair. Sustainable productivity requires proper workspace ergonomics.'
      }
    ]
  },
  {
    category: 'Development Tools',
    items: [
      {
        name: 'WebStorm',
        description:
          'Primary IDE for JavaScript/TypeScript development. Intelligent refactoring, debugging, and framework-specific tooling.'
      },
      {
        name: 'VS Code',
        description:
          'Lightweight editor for quick edits and specific language support through extensions.'
      },
      {
        name: 'IntelliJ IDEA',
        description: 'JVM-based development and backend services. Robust debugging and profiling capabilities.'
      },
      {
        name: 'iTerm2 + Zsh',
        description:
          'Customized terminal environment with aliases, functions, and productivity enhancements.'
      },
      {
        name: 'Docker',
        description:
          'Containerized development environments ensuring consistency across local, CI, and production.'
      },
      {
        name: 'Postman',
        description: 'API development and testing. Essential for designing and debugging REST endpoints.'
      }
    ]
  },
  {
    category: 'Design & Collaboration',
    items: [
      {
        name: 'Figma',
        description:
          'UI/UX design collaboration. Translating designs to code with accurate implementation.'
      },
      {
        name: 'Excalidraw',
        description: 'Quick architecture diagrams and technical documentation sketches.'
      },
      {
        name: 'Notion',
        description:
          'Knowledge management, technical documentation, and project planning.'
      },
      {
        name: 'ClickUp',
        description: 'Project management and sprint planning for team coordination.'
      }
    ]
  },
  {
    category: 'Testing & Quality',
    items: [
      {
        name: 'Chrome DevTools',
        description: 'Performance profiling, debugging, and network analysis.'
      },
      {
        name: 'Brave Browser',
        description: 'Privacy-focused testing and cross-browser compatibility verification.'
      },
      {
        name: 'iOS Simulator',
        description: 'Mobile application testing and responsive design validation.'
      }
    ]
  }
];
