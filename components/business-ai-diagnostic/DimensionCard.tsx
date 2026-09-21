"use client";

import { useState } from "react";
import { AREA_STYLES, type Dimension } from "./dimensions-data";

export function DimensionCard({ dimension }: { dimension: Dimension }) {
  const [flipped, setFlipped] = useState(false);
  const style = AREA_STYLES[dimension.area];
  const face = `absolute inset-0 [backface-visibility:hidden] p-4 rounded-lg flex flex-col ${style.tint} border border-outline-variant/30`;

  return (
    <div className="group relative [perspective:1200px]">
      {/*
        Desktop hover/keyboard-focus flip is pure CSS (group-hover /
        focus-within) — deliberately NOT mirrored with onMouseEnter/onFocus
        JS handlers. A tapped button on touch fires a synthetic
        mouseenter-then-click sequence; if hover also set React state, that
        sequence would flip then immediately flip back on the same tap. Click
        is the only JS-driven trigger, so it can't race with hover.
      */}
      <button
        type="button"
        aria-expanded={flipped}
        onClick={(e) => {
          // Flipping back must also blur: the click itself focuses the
          // button, and focus-within would otherwise keep it flipped even
          // after `flipped` turns false (seen when testing a second tap).
          // Capture the target now — React nulls the synthetic event's
          // fields before the setState updater below runs.
          const target = e.currentTarget;
          setFlipped((f) => {
            const next = !f;
            if (!next) target.blur();
            return next;
          });
        }}
        className="relative block w-full h-96 text-left"
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div aria-hidden={flipped} className={`${face} gap-1.5`}>
            <div className="flex items-center justify-between">
              <span className={`font-display text-lg font-bold ${style.text}`}>
                {dimension.number}
              </span>
              <span className="font-body text-[10px] leading-none uppercase tracking-wide text-secondary">
                {dimension.area}
              </span>
            </div>
            <span className="font-body text-sm leading-tight text-on-surface font-semibold">
              {dimension.name}
            </span>
          </div>

          <div
            aria-hidden={!flipped}
            className={`${face} gap-3 overflow-y-auto [transform:rotateY(180deg)]`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-body text-sm leading-snug text-on-surface font-bold">
                {dimension.summary}
              </p>
              <span className="shrink-0 font-body text-[10px] leading-none uppercase tracking-wide text-secondary">
                Weight: {dimension.weight}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {dimension.questions.map((question) => (
                <li
                  key={question}
                  className="font-body text-sm leading-snug text-on-surface-variant pl-3 border-l-2 border-outline-variant/40"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </button>
    </div>
  );
}
