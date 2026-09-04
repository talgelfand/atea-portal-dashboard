## Installation

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

# Atea Portal Dashboard

A customer portal dashboard with global search for products, knowledge articles, and support tickets.

## Technologies

- **React**: Builds the dashboard UI and components.
- **TypeScript**: Provides static typing.
- **Vite**: Runs the development server and production build.
- **styled-components**: Defines component-level styles.
- **Jotai**: Manages notification state.
- **ESLint**: Checks code quality and React patterns.

The app uses local JSON files and mock API functions instead of a live backend.

## Design Tokens & Brand Adherence

Global design tokens are defined in `src/styles/designTokens.ts`. They mirror the design system's primitive and semantic values for colors, spacing, typography, borders, and radii.

Components use these tokens for the dashboard grid spacing, panel sizing, table gaps, control padding, text hierarchy, status colors, and feedback states. Shared layout and component conventions are kept in the owning components, while `styles/` contains only the global token definitions.

## Testing

Unit testing is done with Vitest. To run tests:

```bash
npm run test
```
