"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AREA_STYLES, type Dimension } from "./dimensions-data";

export function DimensionCard({ dimension }: { dimension: Dimension }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const style = AREA_STYLES[dimension.area];
  const titleId = `dimension-${dimension.number}-title`;

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`w-full text-left p-6 rounded-lg flex flex-col gap-3 min-h-[132px] ${style.tint} border border-outline-variant/30 transition-shadow hover:shadow-lg focus:shadow-lg`}
      >
        <div className="flex items-center justify-between">
          <span className={`font-body text-[10px] font-bold leading-none uppercase tracking-wide ${style.text}`}>
            {dimension.number}
          </span>
          <span className="font-body text-[10px] leading-none uppercase tracking-wide text-secondary">
            {dimension.area}
          </span>
        </div>
        <span className="font-display text-lg leading-snug text-on-surface font-bold">
          {dimension.name}
        </span>
      </button>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-on-surface/40"
                onClick={close}
                aria-hidden="true"
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className={`relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl p-8 shadow-lg border border-outline-variant/40 ${style.tint}`}
              >
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full text-secondary hover:text-on-surface hover:bg-on-surface/5 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2L14 14M14 2L2 14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className="flex items-center justify-between pr-10">
                  <span className={`font-body text-[10px] font-bold leading-none uppercase tracking-wide ${style.text}`}>
                    {dimension.number}
                  </span>
                  <span className="font-body text-[10px] leading-none uppercase tracking-wide text-secondary">
                    {dimension.area}, Weight {dimension.weight}
                  </span>
                </div>
                <h3
                  id={titleId}
                  className="font-display text-xl leading-snug text-on-surface font-bold mt-3"
                >
                  {dimension.name}
                </h3>

                <p className="font-body text-sm leading-relaxed text-on-surface font-bold mt-5">
                  {dimension.summary}
                </p>

                <ul className="flex flex-col gap-3 mt-5">
                  {dimension.questions.map((question) => (
                    <li
                      key={question}
                      className="font-body text-sm leading-relaxed text-on-surface-variant pl-3 border-l-2 border-outline-variant/40"
                    >
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
