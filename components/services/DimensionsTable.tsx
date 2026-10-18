"use client";

import { useRef, useState } from "react";
import { AREA_STYLES } from "@/components/business-ai-diagnostic/dimensions-data";
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
      <div className="overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-lowest">
        <table id="failure-modes" className="w-full text-left">
          <caption className="sr-only">
            Business AI Diagnostic dimensions and their associated failure modes
          </caption>
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
            {/* All rows are rendered so the full table is in the page HTML;
                non-featured rows are hidden until expanded. */}
            {FAILURE_MODES.map(({ dimension, failureMode, featured }) => (
              <tr
                key={dimension.number}
                hidden={!expanded && !featured}
                className="border-t border-outline-variant/40 align-top"
              >
                <th scope="row" className="px-4 sm:px-6 py-4 font-normal">
                  <span className="flex flex-col gap-1">
                    <span
                      className={`font-body text-xs uppercase tracking-wider font-semibold ${AREA_STYLES[dimension.area].text}`}
                    >
                      {dimension.number} · {dimension.area}
                    </span>
                    <span className="font-display text-base text-on-surface font-bold">
                      {dimension.name}
                    </span>
                  </span>
                </th>
                <td className="px-4 sm:px-6 py-4 font-body text-base leading-relaxed text-on-surface-variant">
                  {failureMode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={expanded}
        aria-controls="failure-modes"
        onClick={toggle}
        className="self-start inline-flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant/40 px-5 py-3 font-display text-sm text-on-surface font-semibold hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {expanded ? "Show fewer" : `Show all ${FAILURE_MODES.length} dimensions`}
      </button>
    </div>
  );
}
