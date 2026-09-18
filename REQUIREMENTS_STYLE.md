# Requirements doc style

Two acceptable styles for `docs/0X-<feature-area>.md`. This is a per-feature-area decision, not a per-project or per-level one — a single project can mix both, one doc per feature area, based on the checklist below. Stay consistent within a doc.

## Default: prose + tables (less detailed)

**Author:** either — you or Claude Code/Codex.

Use for most feature areas. Describe behavior in prose and tables — precise field names, exact enum values, exact thresholds. Also include concise behavioral acceptance cases, but they do not need the full When/And/Then structure used for high-risk functionality.

Example shape (modeled on the Yordex SDR app docs):

````markdown
## <Feature name>

<Feature name> should <what it does, in one or two sentences>.

### Input
- `field_name`: <type/constraints>
- ...

### Behavior
| Condition | Result |
| --- | --- |
| ... | ... |

### Output
- <what gets written/returned, exact field names>

### Acceptance tests
| ID | Case | Expected result |
| --- | --- | --- |
| `<FEATURE>-01` | <action or condition> | <observable result> |
````

## Detailed: acceptance-test scenarios

**Initial author:** Erik, personally — not Claude Code/Codex. For high-risk functionality, Erik supplies one detailed requirements file per feature before implementation begins. The preferred shape is the CAP-16 requirements format: Purpose, explicit successful and unsuccessful acceptance-test scenarios, and the API contract when applicable. Claude Code/Codex may identify omissions, ask targeted questions, and incorporate Erik's answers, but must not substitute its own first draft for Erik's initial detailed requirements — and if Erik only describes a high-risk change conversationally instead of writing it up, Claude Code/Codex must say so and recommend the write-up rather than proceeding as if the conversational description were equivalent (see `AGENTS.md` → Development workflow).

Use when the behavior fails one or more of these checks — the more it fails, the stronger the case:

- **Money or billing**: does this behavior move money, change a price, or affect what someone is charged?
- **Irreversible or hard to undo**: does it delete something, or take an action that can't be cleanly reversed by rerunning it?
- **Writes to an external system of record you don't fully control**: does it call a third-party API that has its own side effects — a CRM sync, a sent email/SMS, a payment provider, a partner integration — where a wrong request is visible or costly outside your own app?
- **Many conditional branches**: does the behavior have enough optional fields, validation rules, or failure paths that prose could plausibly leave a gap Claude Code/Codex would have to guess at?
- **Low observability of failure**: if this behavior were wrong, would you find out quickly (a visibly broken page) or only much later (quietly wrong data accumulating for weeks)?

If none of these apply — internal-only, easily reversible, mistakes are cheap and quickly visible, few edge cases — use prose + tables instead. Infrastructure load (basic vs. high-performance) is not on this list on purpose: it doesn't predict ambiguity risk, so don't use it as a proxy.

Example shape (modeled on the CAP-16 format from the Clairify capabilities repo):

````markdown
# <Feature identifier> — <Feature name>

## Purpose
<What this feature does and why it exists.>

## Acceptance Tests

### <TEST-ID>: successfully <action>
```
When <trigger, e.g. the POST /x API is called>
And <precondition>
Then <outcome>
And <outcome>
```

### <TEST-ID>: unsuccessfully <action>
```
When <trigger>
And <missing/invalid precondition>
Or <alternative invalid precondition>
Then <rejection outcome>
```

## API
<Request, success-response and error-response examples, when applicable.>
````

Give each durable, user-visible or high-risk scenario a stable ID (both styles — not just the detailed one). Each scenario should also become an automated test in the project's existing test framework (Vitest/Playwright, pytest, whatever already fits the stack — no need to adopt Cucumber/Gherkin specifically). Include the same ID in the automated test's name so Claude Code/Codex can report a direct requirement-to-test mapping. Map the scenario's When/And/Or/Then structure onto the test's arrange/act/assert structure. If automation is impractical, record why and define the exact manual check instead.

**ID format:** `<AREA>-<CHAPTER>-<DDD>`.
- `AREA` — the doc type: `API` (`0X-api.md`), `UI` (`0X-ui.md`); a feature-area doc (`0X-<feature-area>.md`) uses its own area name instead (e.g. `docs/02-USDA.md` → `USDA`), since each feature area is its own namespace rather than sharing one `FEATURE` area across every such doc.
- `CHAPTER` — `SHARED` for a case spanning multiple endpoints/pages (never gets a method prefix, since it isn't tied to one), otherwise the endpoint/page path in full: uppercased, `/` replaced with `-`, each dynamic path segment (e.g. `{id}`, `{programmeId}`) replaced with the literal `ID`, and any routing-only prefix shared by every entry in that doc (an API version like `v1`, a locale segment like `{locale}`) dropped, since `AREA` already scopes to the doc. When the chapter names an HTTP endpoint (in `0X-api.md` or a feature-area doc's own endpoints), prefix the path with its method: `<METHOD>-<PATH>`. A UI page chapter has no method to prefix.
- `DDD` — a zero-padded 3-digit sequence per chapter, starting at `001`.
- Example: `GET /v1/programmes/{programmeId}/recipes` → `API-GET-PROGRAMMES-ID-RECIPES-001`.

**Every endpoint, page, or feature area gets an Acceptance Tests section, even with zero cases** — write "_None yet._" rather than omitting the section, so its absence never reads as ambiguous between "not written yet" and "deliberately has none."

## Both styles

- Describe **what**, never **how** — no file paths, function names, or implementation details. That's what keeps the doc stable across refactors and portable if the project is later promoted to professionally supported.
- Add a **Changes** section at the top when useful: date + one-line description, newest first. Cheap, and it's the only audit trail a memory-less agent session has.
- Resolve ambiguity and classification (see `AGENTS.md` → Development workflow) before writing implementation code, but there's no separate approval artifact to sign off afterward — the requirements live directly in `docs/`, updated as part of the same change that implements them. At completion, Claude Code/Codex verifies every documented test ID and fixes failures itself, involving Erik only for an exception defined in `AGENTS.md`'s Development workflow.
- Document behavioral acceptance cases, not every internal unit test. Claude Code/Codex owns the additional unit, integration and engineering tests needed to establish technical quality.
