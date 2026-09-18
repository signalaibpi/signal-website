# Signal Website

<!-- This file is canonical for both Claude Code and Codex. CLAUDE.md in this
     project's root is a one-line `@AGENTS.md` import — don't hand-maintain a
     second copy of this content. If CLAUDE.md and AGENTS.md ever diverge,
     that's a bug: fold the extra content back in here. -->

## What this project is
The marketing website for Signal, an AI transformation advisory (Business AI Diagnostic, AI Strategy Planning, Embedded AI Delivery) targeting CEOs, COOs, NEDs, and PE operating partners at mid-market companies. It's a static/content marketing site — no database, no custom API — deployed at signalaibpi.com.

## Technical setup
Stack, dependencies, accounts, architecture preferences, and technical decisions all live in `TECHNICAL.md` — read it before adding a dependency, changing infrastructure, or touching deployment config.

## Documentation map
Read these before making product, workflow, schema, or UI changes:

- `docs/README.md` — documentation index
- `docs/01-introduction.md` — purpose, users, concepts
- `docs/02-ui.md` — UI behavior per page

This project has no database and no custom API, so those doc types don't apply here.

## Session start
None required — no external connectivity or environment check needed before starting work.

## Development workflow
No requirements-diff or engineering-plan artifacts, and no approval gates — Erik doesn't review those, so they'd add process without adding quality. `docs/` and `TECHNICAL.md` are still the canonical description of the system as currently implemented; update them as part of the same change that alters behavior, not as a separate reviewed step. Documentation-only corrections and changes that cannot affect runtime behavior can skip everything below. Nothing else is exempt regardless of how small it looks — reasoning like "this is too simple to need review" or "it's just a deletion" is a signal to follow the steps below anyway, not a reason to skip them.

### Requirements
1. Read the relevant files in `docs/`, `TECHNICAL.md`, and the affected code before proposing an implementation.
2. Assess the change against every risk criterion in `REQUIREMENTS_STYLE.md`. State the recommended classification—ordinary or high-risk—and briefly explain which criteria do or do not apply. If the evidence or classification is uncertain, recommend high-risk.
3. If the change is high-risk and Erik has only described it conversationally rather than supplying the detailed requirements file `REQUIREMENTS_STYLE.md` calls for, say so explicitly and recommend he write it up first — do not silently draft the detailed requirements yourself and treat that as equivalent. Erik may still tell you to proceed on the conversational description anyway, but that has to be his explicit call, not your default.
4. For an ordinary change, expand Erik's description into precise requirements and acceptance test cases yourself. Identify conflicts, missing decisions, ambiguous behavior, inputs, outputs, validation, permissions, error behavior, external side effects, and important edge cases. Ask Erik targeted questions wherever the answer could materially change product behavior. Do not guess.
5. For a nontrivial or ambiguous change, use Plan Mode to lay out the approach and get it approved before writing code. Nothing to keep afterward beyond the resulting git diff — no separate plan file to maintain.

### Implementation and verification
1. Inspect the existing implementation and reuse established patterns and helpers. Migrations and any action with an external side effect (sending an email, calling a third-party API or payment provider, writing to another system) default to a safe, non-destructive form — e.g. add a nullable column and backfill before enforcing `NOT NULL`, rather than a single destructive step. Stop and recommend professional support if the security needs or code complexity exceed the self-maintained limits in the AI coding playbook.
2. Implement the approved behavior together with the required automated tests. Tests must be capable of failing when the behavior is wrong; do not weaken assertions to make an implementation pass.
3. Map every documented acceptance-test ID to an automated test where automation is practical (see `REQUIREMENTS_STYLE.md` for the ID format). If a case cannot be automated, document the reason and the exact manual check.
4. Run all relevant tests plus the project's type-check, linter, production build, migrations, and other applicable validation. Fix failures and rerun checks until they pass. Never describe a check as passing unless it actually ran successfully.
5. Before calling the change done, run `/code-review` (correctness, duplication, simplification, performance) and `/security-review` against the diff — for every functional, schema, API, or UI change, not only ones that look risky. Fix what they find. Never decide on your own that a finding doesn't need fixing — if you think one shouldn't block completion, say so and ask Erik to fix now or defer, and record which he chose. Default to medium review effort; escalate to high or `ultra` for high-risk changes. Erik isn't reviewing the code line by line, so this is what catches quality drift instead of a human doing it by osmosis.
6. When everything passes, keep docs current (see `## Keep docs current` below) and commit locally. Tell Erik concisely that the change was implemented, documented, and all required checks passed — don't require another approval or present routine traceability and test output he hasn't asked to inspect.
7. Stop and ask Erik only when completion would require changing an approved requirement or acceptance test, accepting an untested case or material limitation, making a new product/commercial decision, accepting a material risk, performing a manual acceptance check only he can perform, or exceeding the self-maintained tier's safety or complexity limits. State the smallest decision or action needed. Do not describe the change as complete until then.

## Contradiction guard
If a requested change conflicts with a rule documented in `docs/` or `TECHNICAL.md`, **stop and confirm before writing any code**. State clearly which rule would be violated and ask whether to proceed. If confirmed:
1. Implement the change.
2. Update the relevant `docs/` file or `TECHNICAL.md` in the same change set.

## Keep docs current
A functional, schema, API, UI, or stack change updates its reference doc in the same change set it's part of, not as a follow-up — a stale doc is worse than no doc, since Erik can't review the code diff directly and docs are the primary way regressions get caught.

- **Behavior or UI:** update `docs/02-ui.md`.
- **Dependencies, language/framework, hosting, deployment target, or any architecture-level judgment call:** update `TECHNICAL.md`, including the technical decisions log, so the "why" is captured when the decision is made, not reconstructed later.

## Technology fit
Whenever a change touches the stack, a dependency, or infrastructure, reassess whether the current technology choices are still the right fit for what the project actually needs today, using the AI coding playbook's basic → high-performance criteria as the checklist. Update `TECHNICAL.md`'s Known limitations / scaling ceiling section either way, but if a choice looks like it's running out of steam — approaching one of those triggers, unmaintained, generating mounting workarounds, or costing more than the project's actual usage justifies — tell Erik directly rather than only noting it in the doc for him to notice later. This only gets checked when a session is actively working on the project; it isn't background monitoring, so a stack that's quietly drifted stale between changes won't get flagged until something touches it again.

## Engineering notes
<!-- Populated by Claude Code/Codex as the project develops — not something to
     write upfront. Examples of what ends up here:
     - Business constants that must stay exact rather than be re-derived —
       e.g. specific scoring weights, a free-tier usage cap, a pricing
       threshold. Anything with a business-defined number that isn't
       obvious from first principles and would silently drift if a future
       session guessed at it instead of reading it here.
     - Pointers to existing helpers to reuse instead of rewriting — e.g. if
       there's already a shared function that fetches and cleans a webpage,
       point new work at it so two slightly-different copies don't appear.
     Anything about the stack itself — dependencies, accounts, architecture
     choices, env vars, local dev setup, testing — goes in TECHNICAL.md
     instead, not here. -->
<<Filled in as the project develops — leave as-is for now.>>

## Git
- Commit locally after changes.
- **Never `git push`** unless explicitly asked.
