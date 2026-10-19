"use client";

import { useRef, useState } from "react";
import { DotLabel } from "./NumberedLinks";
import { FAILURE_MODES } from "./services-data";

export function DimensionsTable() {
  const [expanded, setExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggle() {
    setExpanded(!expanded);
    // Collapsing removes rows above the button; keep it in view so the
    // reader isn't left further down the page.
    if (expanded) {
      requestAnimationFrame(() => buttonRef.current?.scrollIntoView({ block: "nearest" }));
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Styled like the homepage "What drives AI results" label, but worded
          for failure modes; it echoes the section intro ("what is holding back
          AI adoption"). It sits on the section background (in line with the
          "Step 01" eyebrow) and titles the table via aria-labelledby. */}
      <div className="flex flex-col gap-3">
        <DotLabel id="failure-modes-title">What holds AI results back</DotLabel>
        <div className="overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-lowest">
          <table id="failure-modes" aria-labelledby="failure-modes-title" className="w-full text-left">
            <thead className="bg-surface-container-low">
              <tr>
                <th scope="col" className="w-[45%] px-4 sm:px-6 py-3 font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                  Dimension
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                  Failure mode
                </th>
              </tr>
            </thead>
            <tbody>
              {/* All rows are rendered so the full table is in the page HTML.
                  On desktop the table sits beside a taller column, so all rows
                  show; below lg, non-featured rows are hidden until expanded. */}
              {FAILURE_MODES.map(({ dimension, failureMode, featured }) => (
                <tr
                  key={dimension.number}
                  className={`border-t border-outline-variant/40 align-top ${
                    !expanded && !featured ? "hidden lg:table-row" : ""
                  }`}
                >
                  <th scope="row" className="px-4 sm:px-6 py-3 font-normal">
                    <span className="flex items-baseline gap-3">
                      <span className="font-body text-sm font-semibold tabular-nums text-secondary">
                        {dimension.number}
                      </span>
                      <span className="font-display text-sm leading-snug text-on-surface font-semibold">
                        {dimension.name}
                      </span>
                    </span>
                  </th>
                  <td className="px-4 sm:px-6 py-3 font-body text-sm leading-relaxed text-on-surface-variant">
                    {failureMode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={expanded}
        aria-controls="failure-modes"
        onClick={toggle}
        className="lg:hidden self-start inline-flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant/40 px-5 py-3 font-display text-sm text-on-surface font-semibold hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {expanded ? "Show fewer" : `Show all ${FAILURE_MODES.length} dimensions`}
      </button>
    </div>
  );
}
