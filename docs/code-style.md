# Code Style

Follow the documented conventions when older code differs. Use comparable
components to guide choices this document leaves open.

## React Components

- Compute values derived from current props and state directly, such as
  `filteredProjects` and `isAllExpanded`. Do not duplicate them in state or
  synchronize them with effects when a render-time calculation is sufficient.
- Preserve semantic HTML through MUI's `component` prop where appropriate,
  such as `Grid component="ul"`, list items, native anchors, and React Router
  links. Avoid unnecessary wrappers that lose the intended semantics.
- When a parent already supplies translations to presentational children,
  follow the existing `t: TFunction` prop pattern. Do not mechanically add a
  separate translation hook to each list item or force translation props
  through unrelated components; independent components may use `useTranslation`.
- Use `memo`, `useMemo`, and `useCallback` selectively for a concrete rendering
  cost or identity need. Do not add memoization to every value or handler by
  default.
- Prefer an early return when a condition determines the component's entire
  output. Keep shared markup and transitions in the parent when only the
  contents differ. A local helper can use an early return to choose between
  large branches, as `Stage` does for the laptop scene and its fallback.
  Keep hooks above conditional returns.
- Review neighboring JSX conditions together. Group elements that share the
  same condition in one branch. Use a ternary for short mutually exclusive
  branches and `&&` for independent optional content.
- Declare exported components with an inline export and a function declaration,
  such as `export default function Component()`. For components wrapped in `memo`
  or another wrapper, assign the wrapped component to a `const` and export it at
  the bottom of the file.
- Keep a helper component in the same file when it organizes the main
  component's JSX and is best understood in that context. Declare it as an
  arrow function below the main component. Give a component its own file when
  it is easier to understand and maintain independently or when other files
  need to import it.
- Order JSX props with `key`, `ref`, `id`, and `className` first, followed by
  shorthand booleans, other props with values, and event handlers. Preserve
  override semantics and evaluation order around prop spreads.
- Group third-party imports first, then project imports after a blank line.
  When a component has a matching SCSS file, start the project group with
  that import, as in `import './ContactForm.scss'`.
- In component files, place imports and local types first, then the main
  component, followed by helper components, helper functions, and module-level
  constants. Keep declarations required during module initialization before
  the declarations that use them.
- Inside components, place hooks, state, and refs first, then effects, then
  local functions and event handlers, then derived values used for rendering
  immediately before the JSX return. Separate these groups with a blank line.
  Keep a value above a hook only when that hook needs it, including in its
  initializer or dependency array.
- Separate adjacent functions and handlers with a blank line. Keep related
  constants together and separate unrelated groups with a blank line. Within
  function bodies, use blank lines where they help readability.
- Keep simple expressions in JSX, such as a conditional label or a `cn(...)`
  call. Extract a value before JSX when the expression is harder to scan or
  the same value is used more than once.
- Place state hooks before refs unless a ref is needed to initialize a state
  hook; in that case, place that ref before the state hook that uses it.

## Naming Rules

- Use meaningful domain names in `camelCase` for variables, parameters, and
  functions. Keep the same name for the same entity across components,
  functions, and options objects; do not introduce synonyms such as `surface`
  for `canvas` unless the meaning or representation actually changes.
- Always end ref-object variable names with `Ref`, as in `sectionRef`,
  `recaptchaRef`, and `canvasRef`. Name the referenced value after the entity
  itself, for example `const canvas = canvasRef.current`. Use that name when
  passing the value to an options object so `{canvas}` is sufficient.
- Name a component's own event handlers `handle<Action>`, as in `handleSubmit`,
  `handleLanguageSwitch`, and `handleExpandAll`. Name callback props
  `on<Action>`, as in `onClose`, `onToggle`, and `onExpand`. Forward an existing
  callback directly when no additional behavior is needed.
- Name event-handler parameters `e`, following the existing project style.
- Naming semantics take precedence over shorthand. A component's own event
  and error handlers use `handle<Action>`, even when this requires an explicit
  assignment such as `onError: handleSceneError`. Do not rename handlers to
  `on...`, introduce aliases, or rename state setters just to force shorthand.
  Matching names are appropriate for ordinary values and forwarded callbacks
  when their roles match.
- Give helpers names that describe their operation, such as `getSortedVideos`,
  `formatSpeed`, `createLaptopScene`, or `loadLaptopModel`. Avoid generic names
  such as `processData` when the operation can be named precisely.
- Start boolean variable names with `is`, including state and derived values.
  Examples include `isOpen`, `isLoading`, `isPlaying`, and `isAllExpanded`.
  Keep names defined by external APIs, such as the MUI `open` prop.
- Name predicate functions according to what they check, for example
  `isValid()`, `hasError()`, or `canSubmit()`.
- Use `[value, setValue]` for state pairs, such as `[isOpen, setIsOpen]`.
  Rename the setter together with the state value. Use `setIs…` for boolean
  state setters in project APIs as well, such as `scene.setIsLidOpen`.
- Name collection items with the singular domain noun, such as
  `projects.map(project => ...)` and `jobs.map(job => ...)`. Keep established
  short names such as `t`, `i18n`, `md`, and `e` where their meaning is clear.
- Use `PascalCase` for components. Match the `.tsx` filename to its main
  component, as in `ContactForm.tsx` for `ContactForm`.
- Give local helpers short names when the parent provides the context, such
  as `Stage` inside `Laptop.tsx`. Include the domain in the name of a component
  read or imported separately when it clarifies its role, as in
  `LaptopSpeedControl`.
- Use `I...` for interfaces, `I...Props` for props interfaces, and `T...` for
  type aliases, following existing project names.
  Preserve intentional import aliases such as `MuiLink` to distinguish
  different components with the same name.
- Reserve `UPPER_SNAKE_CASE` for exported non-boolean data constants such as
  `ROUTE`, `DURATION`, and `TECHNOLOGY_TITLE`. Use `camelCase` for unexported
  constants, including module-level limits and configuration such as `speedMin`
  and `swiperOptions`.
- Apply these conventions to new and touched code. Do not mass-rename
  unrelated files or treat isolated inconsistencies as new conventions.

## Styling Rules

- Follow the existing BEM-inspired naming convention. Use the standalone
  component name for its local block and prefix its elements and modifiers with
  that name, as in `.Block`, `.Block-Element`, and `.Block_modifier`.
- Use values from `src/styles/_variables.scss`, including `$colors-map`, instead
  of duplicating colors, durations, breakpoints, or other design tokens.
- Use the responsive and interaction mixins from `src/styles/_mixins.scss`, such
  as `m.xs`, `m.sm`, `m.md`, `m.lg`, and `m.hover`.
- Place mixin calls at the start of each rule. Put `m.hover` and breakpoint
  mixins at the end of the rule, preserving the intended cascade.
- Vite automatically makes the Sass `v` and `m` namespaces available to
  component styles.
- Preserve keyboard navigation, focus states, semantic HTML, and responsive
  behavior when changing UI.

## TypeScript and Content

- Before using or changing a third-party library API, inspect the installed
  package version and its local TypeScript declarations first. Use official,
  version-matched documentation as a secondary source. Treat MCP servers and
  `llms.txt` as supplementary context, and do not assume an API from memory or
  from another library version.
- For Material UI documentation, use the configured `mui-mcp` server when
  available. If it is unavailable, consult the official MUI documentation
  directly. Always check that the guidance matches the installed package version.
- Follow the configured formatting: single quotes, no semicolons, no spaces
  inside braces, and trailing commas where supported.
- In object literals, place shorthand properties before explicitly assigned
  properties. Preserve override semantics and evaluation order around spreads
  and computed properties.
- Prefer `const`, clear inferred types, and arrow functions for helpers and
  callbacks.
- For arrow functions that perform one simple operation, use a concise
  expression body without braces, such as
  `const handleSpeedClose = () => setIsSpeedPanelOpen(false)`.
  Use a block body for multiple statements or control flow. Preserve intended
  return-value behavior when simplifying existing functions.
- Apply KISS and YAGNI. Implement the smallest solution for the inputs and
  behavior the feature supports today. Use fixed project data directly, such
  as the laptop speed presets. Check actual inputs before adding branches for
  other formats or configurations. Handle failures that can occur with the
  current implementation.
  Add helpers only when they remove duplication or clarify responsibility.
  Keep style changes scoped to the code being worked on.
- When adding translatable interface text, update both `src/translations/en.ts`
  and `src/translations/ru.ts` and keep their key structures aligned.
- Follow the existing image conventions, including responsive and retina assets,
  rather than introducing a new asset-loading pattern.
