# Code Style

Apply these conventions to new and changed code. Use comparable components to
guide choices the docs leave open.

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

- Use consistent domain names in `camelCase`. Name helpers for what they do
  and use singular names for collection items. Keep established short names
  such as `t`, `md` and `e`.
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

- Use component-based block names with `.Block-Element` and
  `.Block_modifier` for elements and modifiers.
- Put file-level variables after `@use` and `@import`, before mixins and rules.
  Keep related declarations and nested rules together. Separate top-level
  blocks with a blank line.
- Group modifiers that share a descendant rule. Use `&` for suffixes and
  same-element selectors. Write descendant selectors directly.
- Use MUI CSS variables for theme values and Sass `v` tokens for breakpoints
  and other shared values. Put mixin calls first in a rule, with `m.hover`
  and breakpoint mixins at the end to preserve the cascade. Vite provides
  the `v` and `m` namespaces.
- Follow existing responsive and retina image patterns. Use `m.retinaImg`
  for decorative CSS backgrounds with standard and retina assets.

## TypeScript and Content

- Check the installed version and local type declarations before changing
  third-party API usage. Use version-matched official docs as a secondary
  source and other references as supplementary context. For MUI, use `mui-mcp`
  when available and official MUI docs otherwise.
- Follow the project's Prettier settings. Start comments with a lowercase
  letter and omit the final period.
- Put shorthand object properties first, preserving evaluation and override
  order around spreads and computed keys.
- Prefer `const`, clear inferred types and arrow functions for helpers and
  callbacks. Use an expression body for a single operation when it preserves
  the intended return value.
- Handle the inputs and failures the feature supports today. Extract helpers
  when they remove duplication or clarify responsibility.
- Update both `src/translations/en.ts` and `src/translations/ru.ts` when adding
  translatable text. Keep their keys aligned.
