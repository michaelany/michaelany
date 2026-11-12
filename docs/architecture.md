# Project Architecture

## Project Layout

- `src/components/` groups components and styles by page or domain. Use
  `base/` for the app shell and `common/` for components shared across domains.
- `src/data/` holds static content and shared data. Keep page-specific
  configuration with its page.
- `src/translations/` holds the English and Russian dictionaries.
- `src/styles/` holds the MUI theme, global styles and shared Sass.
- `src/utils/` holds helpers, constants, i18n setup and types. Group related
  domain utilities in a subfolder, as in `src/utils/laptop/`. Keep shared types
  in `src/utils/types.ts` and reuse existing types such as `TColor`.
- `tests/` holds Playwright tests. `public/` holds files served as-is.

Declare routes in `src/components/App.tsx` and lazy-load page components. Use
the import aliases in `tsconfig.json`.

## Components

- Extract components that own meaningful structure, logic, state or behaviour.
  Share purely visual patterns through classes in `src/styles/partials.scss`.
- Reuse building blocks such as `Section`, `Sections`, `Animate`, `Panel` and
  `ExpandAction`. Prefer built-in MUI components, props, states and transitions.
- Use MUI `Stack` for rows and columns and `Grid` for grids when their layout
  props suffice. Use semantic HTML for simple text and headings, and local
  SCSS for custom elements and layouts.
- Render repeated UI from data with `map`. Prefer local state and explicit
  props. Introduce shared state when the feature needs it.

## Styles

- Put a standalone component's styles in a matching SCSS file beside it.
  Import the stylesheet from the component that owns it.
- Set project-wide MUI defaults in `src/styles/theme.ts` and apply exceptions
  where they are used. Use `partials.scss` for reusable opt-in classes.
