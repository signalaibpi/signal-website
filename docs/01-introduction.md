# Introduction

The Signal website is the public marketing site for Signal, an AI transformation advisory. It explains Signal's services, builds credibility with prospective clients, and drives them to engage (e.g. via the free AI Snapshot or booking a conversation).

The goal is to:

- Clearly explain what Signal does and why it's different (frontline-led AI transformation, not generic AI consulting).
- Build enough credibility and trust that a qualified prospect starts a conversation.
- Convert interest into a first step — most likely the free AI Snapshot or a direct enquiry.

## Users
- **Prospective clients** — CEOs, COOs, NEDs/Board members, and PE operating partners at mid-market companies (see the Business Plan's ICP section), evaluating whether Signal is credible and relevant to their AI problem. They need to quickly understand what Signal offers, who it's for, and how to take a first step.
- **Erik (site owner)** — maintains and evolves the site's content and structure over time.

## Core Concepts
<!-- A glossary of the domain nouns this app is built around. Keep field names
     and enum values exact — this is what keeps later docs and the agent's
     behavior consistent across sessions. -->

### Signal's services
Three services, described in full in `/Users/erikdekroon/Documents/Signal/Signal Business Plan.md`:

- **Business AI Diagnostic** — gives Boards visibility into current AI status, strengths and weaknesses.
- **AI Strategy Planning** — helps Boards identify AI priorities, allocate funding, and set organisation-level targets.
- **Embedded AI Delivery** — helps organisations adopt the AI strategy and build the data quality, workforce capability, and accountabilities required.

Naming convention (established from `Signal Website Copy.md` and confirmed by the live homepage's own usage, applied consistently across every page): always write the product's full name, **Business AI Diagnostic**, when naming it as a proper noun. Don't shorten it to "the Diagnostic" or similar. Lowercase "diagnostic" is fine only as a generic noun ("a sample diagnostic," "diagnostic dimensions," "diagnostic results").

### Source material
Content and design decisions for this site should be checked against, in order of authority for their domain:

- `/Users/erikdekroon/Documents/Signal/Signal Business Plan.md` — offer, pricing, ICP, positioning. Always authoritative.
- **Copy**: for a page or section not yet built, `/Users/erikdekroon/Documents/Signal/Website/Signal Website Copy.md` is the master draft. Once a page or section is implemented, its own code (the live homepage) becomes the master for its copy — Erik edits copy directly in the components as the site evolves, and `Signal Website Copy.md` is not kept in sync. Don't "correct" implemented copy back to what `Signal Website Copy.md` says; if the two disagree for an implemented page, the code is right and the doc is stale.
- `/Users/erikdekroon/Documents/Signal/Website/Signal Website Design Guidelines.md` — visual design guidelines. Erik has overridden specific rules in this doc for the homepage when he had a good reason (see `TECHNICAL.md`'s decisions log) — it's a starting brief, not gospel.
- `/Users/erikdekroon/Documents/Signal/Website/Gemini Image Style Guidelines.md` — image generation style guidelines.
