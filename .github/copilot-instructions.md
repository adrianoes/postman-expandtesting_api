# AI Coding Agent Instructions — postman-expandtesting_api

These instructions make AI agents immediately productive in this repository.

## Overview
- Purpose: Store and run API tests for ExpandTesting Notes API via Postman/Newman.
- Scope: No application source code; core artifacts are exported Postman collection and environment plus generated reports.
- Outcome: Run Newman locally, produce HTML report in `results/`, and evolve tests by exporting updates from Postman.

## Repository Layout
- Collection: [expandtesting.json](../../expandtesting.json) — Postman collection export (source of truth for requests, pre-request and test scripts).
- Variables: [expandtesting_env.json](../../expandtesting_env.json) — exported variables file used with Newman.
- Docs & commands: [README.md](../../README.md) — canonical setup and run instructions.
- Reports: [results/](../../results) — contains HTML reports (preferred file name: `report.html`).

## Developer Workflows
- Install prerequisites (Windows): Node.js 18.18.0, Postman 11.11, Newman 6.2.1, `newman-reporter-htmlextra` 1.23.1.
- Run full suite with report:
  - `newman run ./expandtesting.json -g ./expandtesting_env.json -r htmlextra --reporter-htmlextra-export ./results/report.html`
- Run simple terminal-only:
  - `newman run ./expandtesting.json -g ./expandtesting_env.json`
- Update tests: Edit in Postman, then re-export the collection/environment to overwrite [expandtesting.json](../../expandtesting.json) and [expandtesting_env.json](../../expandtesting_env.json). Avoid hand-editing JSON unless trivial and intentional.
- Debug failures: Inspect `pm.test()` and `pm.*` scripts inside the collection; verify variable values loaded from the exported variables file.

## Project Conventions
- Variables file flag: This repo uses Newman `-g` to load the exported variables file, matching README. Do not switch to `-e` without validating all tests.
- Reports: Use `results/report.html` for generated htmlextra reports. The repo currently includes `results/report.htm`; standardize on `.html` for new runs.
- Versions: Follow versions in [README.md](../../README.md); upgrade only with explicit intent and after verifying commands.
- Exports: Treat Postman exports as the authoritative source; re-export after making changes in Postman.
- Manual flows: Password reset-related tests require manual verification (email-dependent) and are not automated.

## Integration Points
- Target API docs: https://practice.expandtesting.com/notes/api/api-docs/
- Demo reference: https://www.youtube.com/watch?v=bQYvS6EEBZc
- Helpful scripting references are listed in [README.md](../../README.md) (dynamic variables, pre-request scripts, assertions).

## Examples
- Generate HTML report:
  - `newman run ./expandtesting.json -g ./expandtesting_env.json -r htmlextra --reporter-htmlextra-export ./results/report.html`
- Quick verification run:
  - `newman run ./expandtesting.json -g ./expandtesting_env.json`

## Notes for Agents
- Don’t add app code; focus on test collection, variables, and workflows.
- When evolving tests, update Postman → export → commit both JSON files; optionally regenerate and commit a fresh report if needed.
- If introducing new variables, document them in [README.md](../../README.md) and ensure they are present in the exported variables file.
