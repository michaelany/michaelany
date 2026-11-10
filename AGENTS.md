# Project Instructions

## Overview

This repository is Michael Any's personal portfolio website. It is a responsive,
accessible SPA and PWA built with React 19, TypeScript, Vite, React Router,
Material UI, Sass, and i18next. The site supports English and Russian.

Consistency and simplicity are the main design priorities. Before choosing an
implementation, search for features that solve the same problem elsewhere in
the project. Check their markup, styles, and shared helpers as applicable.
Reuse the established approach when it meets the requirements, and follow its
structure and naming. Keep changes scoped to the task. Introduce abstractions
or dependencies only for a concrete need.

## Required Reading

Before changing project code, read and follow both documents:

- [Project architecture](docs/architecture.md): directory responsibilities,
  component boundaries, and shared code placement.
- [Code style](docs/code-style.md): React patterns, declaration order,
  naming, TypeScript, styling, and content conventions.

These documents are part of the project instructions. Keep task-specific
user directions authoritative when they differ from documented defaults.

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

## Maintaining These Instructions

- Treat these instructions and their linked documents as living project
  documentation. Agents may update them during authorized work to record
  explicit user agreements, verified recurring conventions, or confirmed
  changes to the project structure and tooling.
- Do not turn a one-off implementation or an agent preference into a project
  rule. Explicit user agreements take precedence over existing code; when
  inferring a convention, inspect comparable code rather than copying an
  isolated inconsistency.
- Update the relevant document instead of appending every detail here.
  Keep each rule in one place, merge duplicates, and remove outdated guidance.
- Keep this root file brief. Add another document only when an existing
  topic becomes difficult to navigate, and link it here with clear reading
  instructions.
- Keep documentation changes scoped to the task and mention them in the
  handoff. Do not use documentation maintenance to relax working agreements
  or authorize actions the user has not requested.
