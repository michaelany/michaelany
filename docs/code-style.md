# Code Style

Apply these conventions to new and changed code. Use comparable components to
guide choices the docs leave open.

Start with the simplest readable implementation that meets the requirements.
Add complexity only when it solves a concrete problem the simpler approach
cannot handle.

## React

- Derive values from props and state during render when possible. Use
  `memo`, `useMemo` and `useCallback` for a concrete performance or identity need.
- Keep hooks unconditional. Return early when a condition determines the
  whole output. Share markup and transitions across branches when only the
  content changes.
- Group JSX elements with the same condition. Use a ternary for short
  alternatives and `&&` for independent optional content. Extract expressions
  that are hard to scan or used more than once.
- Preserve semantic HTML, using MUI's `component` prop where appropriate.
  Keep keyboard navigation, focus states and responsive behaviour intact.
- Pass `t: TFunction` to presentational children when the parent already
  supplies translations. Independent components can use `useTranslation`.

## Component Files

- Group third-party imports first, then project imports after a blank line.
  Start the project group with the component's SCSS import, if present.
- Put imports and local types first, then the main component, local helpers
  and module constants. Define values before anything that uses them during
  module initialisation.
- Export components with an inline function declaration. Assign wrapped
  components to a `const` and export them at the bottom. Define JSX helpers
  as arrow functions below the main component when they belong in the same file.
  Give independently useful or shared components their own files.
- Inside a component, group hooks, state and refs first, then effects, then
  functions and handlers, then render values. Declare a value earlier if a
  hook needs it. Put state hooks before refs unless a ref initialises state.
- Use blank lines between groups and between adjacent functions and handlers.
  Keep related constants together.
- Order JSX props as `key`, `ref`, `id`, `className`, shorthand booleans, other
  props and handlers. Preserve override and evaluation order around spreads.

## Naming

- Use the simplest name that clearly describes the role. Add a qualifier when
  it distinguishes the name from another concept in use, such as a different
  layout for the same content.
- Use consistent domain names in `camelCase`. Name helpers for what they do
  and use singular names for collection items. Keep established short names
  such as `t`, `md` and `e`.
- Use action-oriented names for helpers and keep related names consistent,
  as in `toRem` and `toResponsiveRem`.
- Use `PascalCase` for components and match the `.tsx` filename to the main
  component. Use contextual names for local helpers and include the domain
  in separately used component names when it helps.
- End ref names with `Ref` and name the referenced value after the entity, as
  in `canvasRef` and `canvas`.
- Name event parameters `e`, component handlers `handle<Action>` and callback
  props `on<Action>`. Forward callbacks directly when no extra work is needed.
  Keep handler names when passing them to props such as `onError`.
- Start boolean variables with `is` and preserve names required by external
  APIs. Name predicates for what they check, as in `hasError` or `canSubmit`.
  Match state setters to their values, as in `[isOpen, setIsOpen]`, including
  setters exposed by project APIs.
- Use `I...` for interfaces, `I...Props` for props and `T...` for type aliases.
  Keep import aliases that distinguish names, such as `MuiLink`.
- Use `UPPER_SNAKE_CASE` for exported non-boolean data constants and
  `camelCase` for unexported constants.

## SCSS

- Keep the root font size at `100%`. Set text sizes in `rem` that resolve to
  whole CSS pixels at the default `16px` root. Set responsive text sizes in
  typography styles.
- Use unitless `line-height` in custom styles so it follows the element's font
  size. The computed line height may be fractional.
- Use the MUI spacing scale for layout gaps, margins and padding. Its base step
  is `8px`. Half steps give `4px` increments. Use `theme.spacing()` or MUI
  spacing props in React and `m.spacing()` in SCSS.
- Use `em` for sizes that should follow the local font, such as an inline icon
  at `1em`. Use whole `px` values for fixed dimensions, borders and breakpoints.
  Flexible layouts, image proportions and user font scaling can produce
  fractional CSS pixels.
- Use component-based block names with `.Block-Element` and
  `.Block_modifier` for elements and modifiers.
- Give child elements their own component class when they need styles. For
  library components, use the public API to assign a class to the relevant
  slot when possible. If the markup offers no way to assign a class, scope
  the descendant selector to the owning component and prefer documented
  library classes where available.
- Put file-level variables after `@use` and `@import`, before mixins and rules.
  Keep related declarations and nested rules together. Separate top-level
  blocks with a blank line.
- Group modifiers that share a descendant rule. Use `&` for suffixes and
  same-element selectors. Write descendant selectors directly.
- Declare shared design tokens in the MUI theme and component-specific CSS
  variables in the styles of the component that owns them.
- Use MUI CSS variables for theme values and Sass `v` tokens for breakpoints
  and other shared values. Put mixin calls first in a rule, with `m.hover`
  and breakpoint mixins at the end to preserve the cascade. Vite provides
  the `v` and `m` namespaces.
- Use range syntax for custom width media queries, such as `(width <= 599px)`.
- Follow existing responsive and retina image patterns. Use `m.retinaImg`
  for decorative CSS backgrounds with standard and retina assets.

## TypeScript and Content

- Check the installed version and local type declarations before changing
  third-party API usage. Use version-matched official docs as a secondary
  source and other references as supplementary context. For MUI, use `mui-mcp`
  when available and official MUI docs otherwise.
- Follow the project's Prettier settings. Start comments with a lowercase
  letter and omit the final period.
- Group related module constants and order them from shared configuration to
  component-specific values. Declare dependencies before their consumers.
- Put shorthand object properties first, preserving evaluation and override
  order around spreads and computed keys.
- Prefer `const`, clear inferred types and arrow functions for helpers and
  callbacks. Use an expression body for a single operation when it preserves
  the intended return value.
- Handle the inputs and failures the feature supports today. Extract helpers
  when they remove duplication or clarify responsibility.
- Update both `src/translations/en.ts` and `src/translations/ru.ts` when adding
  translatable text. Keep their keys aligned.
