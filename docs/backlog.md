# Backlog

## Project catalog

- [ ] Keep the project catalog out of `/about`. Move `PROJECTS_COUNT` and the
      existing private and other project counts to a lightweight module. Calculate
      the total from the number of entries in `PROJECT_COLORS` plus those counts,
      so `/about` can display the same total without importing `projects.ts`.
- [ ] Evaluate splitting project summaries from details if the catalog grows
      or the production bundle shows a meaningful saving. Share the summaries
      between `/portfolio` and `/experience`, and load the full details only for
      the selected project on `/portfolio/:project`.
