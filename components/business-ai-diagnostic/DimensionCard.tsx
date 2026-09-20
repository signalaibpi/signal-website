"use client";

import { useState } from "react";
import { AREA_STYLES, type Dimension } from "./dimensions-data";

export function DimensionCard({ dimension }: { dimension: Dimension }) {
  const [open, setOpen] = useState(false);
  const style = AREA_STYLES[dimension.area];

  return (
    <div
      className={`group relative hover:z-20 focus-within:z-20 ${open ? "z-20" : "z-0"}`}
    >
      {/*
        Desktop hover/keyboard-focus reveal is pure CSS (group-hover /
        focus-within) — deliberately NOT mirrored with onMouseEnter/onFocus
        JS handlers. A tapped button on touch fires a synthetic
        mouseenter-then-click sequence; if hover also set React state, that
        sequence would open then immediately re-close on the same tap. Click
        is the only JS-driven trigger, so it can't race with hover.
      */}
      <button
        type="button"
        aria-expanded={open}
        onClick={(e) => {
          // Closing must also blur: the click itself focuses the button,
          // and focus-within would otherwise keep the panel visible even
          // after `open` flips to false (seen when testing a second tap).
          // Capture the target now — React nulls the synthetic event's
          // fields before the setState updater below runs.
          const target = e.currentTarget;
          setOpen((o) => {
            const next = !o;
            if (!next) target.blur();
            return next;
          });
        }}
        className={`w-full text-left p-4 rounded-lg flex flex-col gap-1.5 ${style.tint} border border-outline-variant/30 transition-shadow motion-reduce:transition-none hover:shadow-lg focus:shadow-lg ${open ? "shadow-lg" : ""}`}
      >
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
      </button>

      <div
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-full mt-1 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/40 shadow-lg flex flex-col gap-3 origin-top transition-[opacity,transform] duration-200 motion-reduce:transition-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <p className="font-body text-sm leading-relaxed text-on-surface-variant">
          {dimension.summary}
        </p>
        <span className="font-body text-xs uppercase tracking-wide text-secondary">
          Weight: {dimension.weight}
        </span>
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
  );
}
