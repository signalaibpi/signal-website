# Development process

This is for you — the person directing the work, not the AI. It describes what to expect and what's expected of you each time you want something built or changed. Nothing here needs to be memorized; skim it once, then use it as a reference.

## The short version

1. **Describe what you want**, in plain language, in a Claude Code (or Codex) session. No special format needed for most changes.
2. **It will tell you whether the change looks ordinary or high-risk**, and why. You get the final say on that classification.
3. **Ordinary change:** it drafts the precise requirements itself from your description and asks you questions wherever something's unclear. Just answer them.
4. **High-risk change:** you write out what should happen yourself, step by step, before work starts (see "High-risk changes" below). It will remind you if you try to skip this.
5. **For anything nontrivial**, it lays out its planned approach and waits for your OK before writing code (this is "Plan Mode"). Skim it, and say yes or push back.
6. It builds the change. It also decides what needs testing and writes those tests itself — you're not asked to specify test cases or review the test code. The one exception: if something genuinely can't be tested automatically, it has to tell you exactly what to check by hand instead of quietly skipping it — and that manual check is sometimes one only you can actually perform (e.g. something only visible by looking at a real screen or a real payment).
7. Before calling anything done, it runs a **code review** and a **security review** on its own work — a separate, structured pass that checks what it just built for bugs, security holes, and sloppy shortcuts, then fixes what it finds. This happens for every change, not just ones that look risky. It's the step that exists because nobody else is reading the code line by line — it's what stands in for a human engineer's review.
8. It updates the project's documentation to match what was actually built.
9. It saves ("commits") the change locally but does **not** put it live on the internet unless you explicitly say so.
10. When you're happy, tell it to push/deploy, and it goes live.

## What you don't need to do

- Write or read separate planning documents for ordinary changes.
- Review the code itself.
- Keep track of "in progress" files — the project's documentation always describes what's actually built, nothing more.

## What you do need to do

- Answer clarifying questions fully — a vague answer produces a vague result.
- Write the requirements yourself for high-risk changes (see below).
- Look at a proposed plan when one is shown to you, and approve or redirect it.
- Make the calls only you can make: pricing, product decisions, accepting a risk, anything that affects a real user or costs real money.
- Perform a manual check yourself, on the rare occasion one is called out because it couldn't be automated.
- Explicitly say when something should go live.

## High-risk changes

Most changes are ordinary — describe them and let the AI take it from there. A change deserves more care from you if it involves:

- **Money** — it moves money, changes a price, or affects what someone is charged.
- **Actions that are hard to undo** — deleting something, sending an email, anything you can't cleanly reverse.
- **Outside systems you don't fully control** — a payment provider, a CRM, anything where a mistake is visible or costly beyond your own app.
- **A lot of edge cases** — many optional fields, rules, or ways it could fail.
- **Failures that are hard to notice** — if it went wrong, would you find out in minutes, or only weeks later from bad data quietly piling up?

The more of these apply, the more it's worth your time to write out, in your own words, exactly what should happen for both the success case and every failure case you can think of — before any code gets written. This is the one place a few minutes of your own thinking prevents a mistake that could otherwise go unnoticed for a long time. Ask the AI to show you the simple format for this if you want structure (it's in `REQUIREMENTS_STYLE.md`) — but plain, specific prose is fine too.

## If it says this is getting too big, or the technology is aging out

Occasionally it will tell you a change is reaching the edge of what's safe to build without a professional developer — too security-sensitive, or too complex to maintain this way. Take that seriously and treat it as a real recommendation to bring in outside help, not a formality to brush past.

Separately, whenever it's touching your stack, a dependency, or your hosting/database setup, it should also tell you directly if a technology choice looks like it's running out of steam — outgrown, unmaintained, or generating a lot of workarounds — rather than let it quietly become a problem you discover later. One limit worth knowing: this only happens when a session is actively working on the project. It isn't watching in the background, so something that goes stale between changes won't get flagged until you next touch it.
