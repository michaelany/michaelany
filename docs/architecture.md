# Project Architecture

## Project Structure

- `src/components/` contains React components and their styles, grouped by
  page or domain.
- `src/components/common/` contains components reused across multiple domains.
- `src/components/base/` contains application-shell components.
- `src/data/` contains static portfolio, technology, video, and shared data.
- `src/translations/` contains the English and Russian translation dictionaries.
- `src/styles/` contains global styles, Sass variables, mixins, MUI overrides,
  reusable presentational classes, and the MUI theme.
- `src/utils/` contains supporting project code, including constants, helpers,
  i18n setup, and types. Keep related domain-specific modules in a subfolder,
  as in `src/utils/laptop/` for the Three.js scene and its model loader.
- `tests/` contains Playwright tests.
- `public/` contains files served without bundler processing.

Routes are declared in `src/components/App.tsx` and page components are lazy
loaded. Reuse the path aliases from `tsconfig.json`, such as `#components`,
`#data`, `#styles`, `#translations`, and `#utils`.

## Components and State

- Keep page-specific components and styles in their existing domain folder.
- Put a component in `common/` only when it is genuinely reused across domains.
- Do not create a React component solely to reuse styles.
- For simple visual patterns applied to MUI or native elements, add a reusable
  class to `src/styles/partials.scss`. Existing examples are `.Button`, `.Link`,
  and `.Chip`.
- Create a separate React component when it owns meaningful child structure,
  logic, state, or behavior that changes how it works.
- Prefer the simplest implementation that fits the existing architecture.
- Prefer built-in MUI components, props, interaction states, and transitions,
  configured through the existing project theme and conventions. Add custom
  implementations only when MUI does not provide the required capability.
- Prefer MUI `Stack` for rows and columns and `Grid` for grids when their
  layout props cover the needed spacing, alignment, and responsiveness. Use
  semantic HTML with local styles for simple text and headings, and local SCSS
  for custom elements or layout that MUI primitives do not cover.
- Describe repeated UI with data arrays and render it with `map`, following
  patterns such as `navLinks`, `jobs`, and portfolio data. Keep page-specific
  configuration local; put shared portfolio content in `src/data/`.
- Prefer local state and explicit props for data and callbacks. Introduce
  shared state infrastructure only when the actual scope requires it.
- Reuse the existing interface building blocks, such as `Section`, `Sections`,
  `Animate`, `Panel`, and `ExpandAction`, when they fit the task.

## Styles and Shared Types

- Give each standalone component with local styles a matching `.scss` file
  beside its `.tsx` file. Import it from the component that owns those styles.
- Keep reusable, structure-independent visual classes in
  `src/styles/partials.scss`.
- When a Material UI component first needs customization, define its project
  default in `src/styles/theme.ts`. If another use needs a different appearance,
  decide which appearance should be the theme default and override the exception
  where it is used. Use reusable partial classes for opt-in variants and local
  SCSS for domain layout.
- Use `m.retinaImg` for decorative CSS backgrounds with standard and retina
  assets, as in `Laptop.scss` and `VideoLink.scss`.
- Keep shared types in `src/utils/types.ts` and reuse existing unions such as
  `TColor` rather than duplicating them.
