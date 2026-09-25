# Signal Website — Technical

<!-- This file is canonical for stack, dependencies, accounts, architecture
     preferences, and technical decisions — everything docs/ deliberately
     leaves out, since docs/ only covers *what* the app does, never *how*
     it's built. Keep this file in sync with the code — see AGENTS.md →
     Tech stack changes. Fill in every <<placeholder>> and delete the
     <!-- guidance --> comments as you go. -->

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css`, no `tailwind.config.js`). No CMS, no database, no custom API — page content is authored directly in React components. Scaffolded with `create-next-app`.

## Platform level
Basic. No trigger for high-performance exists or is expected for a static marketing site.

## Accounts & platforms
- **Version control:** GitHub — account: `signalaibpi`. Repo: https://github.com/signalaibpi/signal-website. Push access via SSH using the `github-signalaibpi` host alias in `~/.ssh/config` (a dedicated key, separate from Erik's personal GitHub SSH key).
- **Commit author:** `contact@signalaibpi.com` (set as this repo's local `git config user.email`, not the global default).
- **Hosting:** Vercel — account: <<fixed, fill in once>>.
- **Database:** None. This project has no database.
- **Domain/DNS:** signalaibpi.com — registrar/account: <<fill in>>.

## Dependencies
| Library | Version | Purpose | Why (if non-obvious) |
| --- | --- | --- | --- |
| next | 16.3.5 | Framework (App Router) | |
| react / react-dom | 19.2.8 | UI | |
| tailwindcss / @tailwindcss/postcss | ^4 | Styling | CSS-first `@theme` config, not `tailwind.config.js` |
| typescript | ^5 | Type checking | |
| eslint / eslint-config-next | ^9 / 16.3.5 | Linting | |

Fonts (Plus Jakarta Sans for headings, Inter for body) are loaded via `next/font/google` — no runtime Google Fonts CDN dependency. No icon library — the handful of UI icons used are hand-written inline SVGs in `lib/icons.tsx`.

## Architecture preferences
No database and no custom API for this project, so the template's default Supabase/API-layer rules don't apply. No standing architecture rules yet — add them here as they come up.

## Technical decisions log
- 2026-09-18: Settled the final area color palette after several rounds (a green/amber pass was rejected for RAG collision and reverted at commit `fce6e98`; a rose/steel-blue-gray substitute "didn't look good" and was reverted the same way; Erik-supplied hex tints were "too dark" and got lightened; Implementation's hue got nudged from cyan toward blue to reduce a residual green-ish read). Final: Strategy `#2457d6`/`#dfe8f8`, Implementation `#145a7d`/`#e1eff6`, Operation `#3e4759`/`#eceef2`, Governance `#6d51c9`/`#eae4f5` (accent/tint) in `app/globals.css`. Erik confirmed this as the best version and final for now — see `docs/02-ui.md` for the description of the final result.
- 2026-09-18: Added 4 "area" colors to `app/globals.css` (`--color-area-strategy/-implementation/-operation/-governance`, each with a light `-tint` background) and applied them to the hero's dimension grid tiles — Erik decided an all-grey grid was too boring and wanted each tile tinted by its diagnostic area. This is an explicit, deliberate exception to Design Guidelines' "use neutral tones for the overall system, accent reserved for a selected dimension/priority" rule, not an oversight — Erik was clear the design brief isn't gospel. The original fully-neutral grid is preserved in git history (commit `119b028`) rather than as a second live component, so it's recoverable without maintaining two versions going forward. These 4 colors are intended to carry over to the future Diagnostic page's radial chart — see `Website/Business AI Diagnostic page/Visual ideas.md`.
- 2026-09-18: Reworked the hero's Business AI Diagnostic card twice. First replaced the original 4-row list-with-fake-percentages (looked like a live software dashboard) with a neutral 6-of-12 tile grid. Then, after Erik questioned why a card-grid style would show only a subset, changed to all 12 real dimensions, fully neutral (dropped the single "priority" accent tile too — with no visible score, an unexplained priority flag was itself an unsupported-looking claim). A richer radial/polar chart concept (colored by the diagnostic's 4 areas, wedge length by score) was considered and parked for the future Diagnostic page's hero instead — see `Website/Business AI Diagnostic page/Visual ideas.md`.
- 2026-09-18: Removed the homepage "Problem" section entirely (`components/home/Problem.tsx` deleted) — Erik updated `Signal Website Copy.md` and confirmed the "Benefits" section (one position later, after "Our approach") covers that narrative role instead, rather than writing separate approved copy for a distinct Problem section. Supersedes the entry below about Problem's copy being a draft. `Signal Website Design Guidelines.md`'s homepage section sequence still lists a separate Problem section — that doc hasn't been updated to match; flagged in `docs/02-ui.md`.
- 2026-09-18: Used the blue accent (`#2457D6`) from `Website/Homepage/code.html` (the approved sample's actual coded/screenshotted output) rather than the purple (`#5338D5`) described in `Website/Homepage/DESIGN.md`'s prose. The two disagree; the rendered screenshot Erik reviewed is blue, so it's treated as the source of truth over the stale design-doc text. Flag to Erik to confirm or correct.
- 2026-09-18: Homepage images are placeholder blocks (`components/ImagePlaceholder.tsx`), not the `lh3.googleusercontent.com` URLs in `code.html`. Those are ephemeral AI-tool preview links, not licensed assets — see Design Guidelines → Photography ("do not represent an unsourced image as licensed"). Real photography still needs to be sourced.
- 2026-09-18: Homepage includes a "Problem" section (per Design Guidelines' section sequence) and a "Benefits" section (per `Signal Website Copy.md`'s own Homepage outline) that `code.html`'s sample omitted or diverged from. The Problem section's body copy is adapted from the Business Plan's problem statement, not yet approved homepage copy — flagged in a code comment in `components/home/Problem.tsx` pending Erik writing final copy for it.
- 2026-09-18: Dropped several inventions from `code.html`'s sample that aren't in `Signal Website Copy.md`: fabricated founder pull-quote, "Executive Mandate / 12 Operational Vectors" hero trust badges, extra sector chips beyond the four named in copy (software, professional services, distribution, outsourcing), a fabricated "45-minute session" claim in the final CTA, and the fabricated "Signal Advisory Partners LLC" footer entity name — see Design Guidelines → Evidence and credibility (no fabricated claims) and → the instruction to preserve supplied copy rather than substitute or add to it.
- 2026-09-18: Next.js + TypeScript + Tailwind CSS v4, chosen as the standard low-friction stack for a Vercel-hosted static/content site with no DB or API. No real alternative seriously considered given the project's simplicity.
- 2026-09-19: Added the first piece of real (non-placeholder) photography: Erik's headshot at `public/erik-de-kroon.jpg`, used in the homepage Founder section (`components/home/Founder.tsx`) via `next/image`. All other homepage sections still use `ImagePlaceholder` — real photography for those remains unsourced. An initial version framed the photo in a `bg-primary` accent border with the headline in a separate column from the body copy; Erik found that combination "weird" and it was reworked the same day to a plain-bordered photo with its own name/title byline, and the headline moved to sit directly above the body text in one column.

## Authentication & authorization
None. The site is fully public with no login.

## Third-party integrations
<!-- External services this project calls, beyond the platform defaults
     above (GitHub/Vercel/Supabase). -->
| Service | Used for | Credentials location |
| --- | --- | --- |
| ... | ... | ... |

## Environment variables
<!-- Names and purpose only — never actual values. -->
| Variable | Purpose | Where set |
| --- | --- | --- |
| ... | ... | ... |

## Testing & CI/CD
<!-- Which test types this project needs isn't a free choice per project —
     apply the triggers below first, then fill in the specifics. -->

**Test-type triggers:**
- **Integration — default requirement.** Add integration tests for any project with a database, external API, or server-side logic that can get something wrong. Skip only if the project has neither persistence nor calls to an external service (e.g. a pure static site with nothing stateful to break).
- **E2E — trigger on irreversible/money-moving flows or shared contracts.** Add e2e coverage when at least one applies: (1) a flow involves real money or an irreversible action (checkout, payment, refund, account/data deletion); (2) a flow crosses a real external boundary integration tests can't honestly simulate (OAuth redirect, payment-provider webhook, third-party auth); (3) more than one client depends on the same contract and a regression can't be hotfixed quickly (e.g. a mobile app stuck in app-store review depending on a web-owned API). Keep e2e scoped narrowly to those specific flows, not a general-purpose suite — it's the most expensive tier to maintain.
- **Unit — trigger on isolated, non-trivial logic.** Add unit tests where the project has meaningful pure logic worth verifying independent of I/O — calculations, parsing/validation rules, multi-branch business rules, mismatched enum/vocabulary mappings. Skip if the project is mostly thin CRUD glue with no real computation; integration tests already cover that risk.

This project has neither persistence nor calls to an external service — a pure static site — so none of the three trigger conditions above apply. No automated test suite for now. Verification is `npm run build` + `npm run lint` passing, plus manual visual review.

No CI configured yet. Vercel runs `npm run build` on every push once the project is connected there.

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```
No seed data, no environment variables required to run locally.

### Codex desktop verification
The default Turbopack development and build commands are unreliable in the Codex desktop execution environment: its CSS worker attempts to bind a local port and fails with `Operation not permitted`. Use Next.js's webpack path immediately instead of first retrying Turbopack:

```bash
npm run dev -- --webpack
npm run build -- --webpack
```

Run these commands with the required elevated local/network permission. The production build fetches the configured Google Fonts through `next/font`, so a sandboxed build without network access fails even when the application code is valid. Starting `next dev` may also append a framework-generated agent-rules block to `AGENTS.md`; treat that as unrelated generated output and exclude it from feature commits unless the project deliberately adopts it.

## Monitoring & error visibility
None yet. Vercel's own deploy/build failure notifications are the only signal once deployed.

## Known limitations / scaling ceiling
None expected. A static marketing site with no database or API has no meaningful scaling ceiling on Vercel's basic tier.
