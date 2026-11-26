# Code Style

Apply these conventions to new and changed code.

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
- Within a file, order imports, local types, the main component, local helpers
  and module constants. Declare dependencies before use at module initialisation.
- Export components with an inline function declaration. Assign wrapped
  components to a `const` and export them at the bottom. Define JSX helpers
  as arrow functions below the main component when they belong in the same file.
  Give independently useful or shared components their own files.
- Inside a component, group hooks, state and refs first, then effects, then
  functions and handlers, then render values. Declare a value earlier if a
  hook needs it. Put state hooks before refs unless a ref initialises state.
- Use blank lines between groups and between adjacent functions and handlers.
- Put common props such as `children`, `ref` and `className` near the start of
  prop interfaces and destructuring. Group related props and put callbacks and
  event handlers last.
- Order JSX props as `key`, `ref`, `id`, `className`, shorthand booleans, other
  props and handlers. Preserve override and evaluation order around spreads.

## Naming

- Use the simplest clear name. Add a qualifier only to distinguish concepts
  already in use.
- Use consistent domain names in `camelCase`, singular names for collection
  items and established short names such as `t`, `md` and `e`. Name related
  helpers by action, as in `toRem` and `toResponsiveRem`.
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

- Keep the root font size at `100%`. Use `rem` text sizes that resolve to whole
  CSS pixels at the default `16px` root. Define responsive sizes in typography
  styles. Use unitless `line-height` in custom styles, allowing fractional results.
- For gaps, margins and padding, use `theme.spacing()` or MUI spacing props in
  React and `f.spacing()` in SCSS. At the default root, a full `0.5rem` step
  is `8px` and a half step is `4px`. Let wide gutters adapt to available width.
- Use `rem` for interface sizes, corner radii and layout breakpoints so they
  follow the browser's base font size. Let text controls grow with their
  content and wrap rows when the available space is too small.
- Use `f.toRem()` when the whole-pixel value at the default root is easier to
  read than the equivalent `rem` literal. Keep simple values such as `1.5rem`
  inline.
- Use `em` for sizes that should follow the local font, such as an inline icon
  at `1em`. Use percentages and viewport units to constrain elements to the
  available space. Use `px` for thin strokes, SVG coordinates and APIs that
  require pixel values.
  Flexible layouts, image proportions and user font scaling can produce
  fractional CSS pixels.
- Use component-based block names with `.Block-Element` and
  `.Block_modifier` for elements and modifiers.
- Give each styled child its own component class. For library elements, assign
  a slot class through the public API when possible. Otherwise scope descendant
  selectors to the component and prefer documented library classes.
- Put file-level variables after `@use` and `@import`, before mixins and rules.
  Keep related declarations and nested rules together. Separate top-level
  blocks with a blank line.
- Group modifiers that share a descendant rule. Use `&` for suffixes and
  same-element selectors. Write descendant selectors directly.
- Declare shared design tokens in the MUI theme and component-specific CSS
  variables in the styles of the component that owns them.
- Read theme values from MUI CSS variables. Vite provides `v` for Sass tokens
  (including breakpoints), `f` for functions and `m` for mixins.
- Put mixin calls first in a rule, with `m.hover` and breakpoint mixins last.
- Use range syntax for custom width media queries, such as `(width <= 37.4375rem)`.
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
  component-specific values.
- Put shorthand object properties first, preserving evaluation and override
  order around spreads and computed keys.
- Prefer `const`, clear inferred types and arrow functions for helpers and
  callbacks. Use an expression body for a single operation when it preserves
  the intended return value.
- Handle the inputs and failures the feature supports today. Extract helpers
  when they remove duplication or clarify responsibility.
- Update both `src/translations/en.ts` and `src/translations/ru.ts` when adding
  translatable text. Keep their keys aligned.
