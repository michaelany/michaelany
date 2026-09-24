# Project Context

## Overview

This repository is Michael Any's personal portfolio website. It is a responsive,
accessible SPA and PWA built with React 19, TypeScript, Vite, React Router,
Material UI, Sass, and i18next. The site supports English and Russian.

## Project Structure

- `src/components/` contains the UI, grouped by page or domain.
- `src/components/common/` contains components reused across multiple domains.
- `src/components/base/` contains application-shell components.
- `src/data/` contains static portfolio, technology, video, and shared data.
- `src/translations/` contains the English and Russian translation dictionaries.
- `src/styles/` contains global styles, Sass variables, mixins, MUI overrides,
  reusable presentational classes, and the MUI theme.
- `src/utils/` contains shared constants, helpers, i18n setup, and types.
- `tests/` contains Playwright tests.
- `public/` contains files served without bundler processing.

Routes are declared in `src/components/App.tsx` and page components are lazy
loaded. Reuse the path aliases from `tsconfig.json`, such as `#components`,
`#data`, `#styles`, `#translations`, and `#utils`.

## Component Rules

- Keep page-specific components and styles in their existing domain folder.
- Put a component in `common/` only when it is genuinely reused across domains.
- Do not create a React component solely to reuse styles.
- For simple visual patterns applied to MUI or native elements, add a reusable
  class to `src/styles/partials.scss`. Existing examples are `.Button`, `.Link`,
  and `.Chip`.
- Create a separate React component when it owns meaningful child structure,
  logic, state, or behavior that changes how it works.
- Prefer the simplest implementation that fits the existing architecture.
- Declare exported components with an inline export and a function declaration,
  such as `export default function Component()`. For components wrapped in `memo`
  or another wrapper, assign the wrapped component to a `const` and export it at
  the bottom of the file.
- Use arrow functions for local helper components within a file.

## Styling Rules

- Follow the existing BEM-inspired naming convention:
  `.Block`, `.Block-Element`, and `.Block_modifier`.
- Keep domain-specific styles beside their component in a matching `.scss` file.
- Keep reusable, structure-independent visual classes in
  `src/styles/partials.scss`.
- Use values from `src/styles/_variables.scss`, including `$colors-map`, instead
  of duplicating colors, durations, breakpoints, or other design tokens.
- Use the responsive and interaction mixins from `src/styles/_mixins.scss`, such
  as `m.xs`, `m.sm`, `m.md`, `m.lg`, and `m.hover`.
- Vite automatically makes the Sass `v` and `m` namespaces available to
  component styles.
- Put broad Material UI overrides in `src/styles/overrides.scss`; use reusable
  partial classes for opt-in variants and local SCSS for domain layout.
- Preserve keyboard navigation, focus states, semantic HTML, and responsive
  behavior when changing UI.

## TypeScript and Content

- Keep shared types in `src/utils/types.ts` and reuse existing unions such as
  `TColor` rather than duplicating them.
- Before using or changing a third-party library API, inspect the installed
  package version and its local TypeScript declarations first. Use official,
  version-matched documentation as a secondary source. Treat MCP servers and
  `llms.txt` as supplementary context, and do not assume an API from memory or
  from another library version.
- Follow the configured formatting: single quotes, no semicolons, no spaces
  inside braces, and trailing commas where supported.
- Match the surrounding project conventions when writing or changing code.
  Prefer `const`, clear inferred types, and arrow functions for helpers and
  callbacks. Follow the component declaration rules above; do not convert
  exported components to arrow functions merely for stylistic modernization.
- Apply KISS: keep control flow straightforward, avoid speculative abstractions,
  and add helpers only when they remove duplication or clarify responsibility.
  Keep style changes scoped to the code being worked on.
- When adding translatable interface text, update both `src/translations/en.ts`
  and `src/translations/ru.ts` and keep their key structures aligned.
- Follow the existing image conventions, including responsive and retina assets,
  rather than introducing a new asset-loading pattern.

## Validation

Run checks appropriate to the change before handing it off:

```sh
npm run format:check
npm run lint
```

The user always runs builds and tests. Do not run `npm run build`, `npm test`, or
other build and test commands unless the user explicitly requests it. Tell the
user when a change should be covered by a build or test run. Do not edit
generated files in `dist/` directly.

## Working Agreement

- Preserve unrelated user changes in the working tree.
- Installing dependencies, running formatting, linting, and local development
  servers is allowed when needed for the task.
- Create commits only when explicitly requested.
- Never push, publish branches or tags, or create pull requests unless explicitly
  requested in the same turn.
