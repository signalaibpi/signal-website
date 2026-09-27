import { DIMENSIONS, type Area } from "./dimensions-data";

// One-off mid-tone wedge fills (60% tint / 40% deep, per --color-area-*
// tokens in globals.css) so all 12 wedges stay distinguishable at a glance.
// Not reusable tokens — deliberately a single-use blend for this graphic.
const WEDGE_FILL: Record<Area, string> = {
  Strategy: "#94aeea",
  Operation: "#a6abb5",
  Implementation: "#8fb3c6",
  Governance: "#b8a9e3",
};

// Deep accent (numbers, ticks) reads from the real tokens via CSS var so it
// tracks any future palette change.
const WEDGE_ACCENT: Record<Area, string> = {
  Strategy: "var(--color-area-strategy)",
  Operation: "var(--color-area-operation)",
  Implementation: "var(--color-area-implementation)",
  Governance: "var(--color-area-governance)",
};

const NAME_GRAY = "var(--color-on-surface-variant)";

const SIZE = 640;
const CX = SIZE / 2;
const CY = SIZE / 2;
const INNER_R = 48;
const OUTER_R_MAX = 160;
const TICK_START = OUTER_R_MAX + 8;
const TICK_END = OUTER_R_MAX + 17;
const LABEL_R = OUTER_R_MAX + 27;
const GAP_DEG = 3;
const STEP_DEG = 360 / 12;
const NUM_SIZE = 12;
const NAME_SIZE = 10.5;
const LINE_H = 13;
const CHARS_PER_LINE = 15;

// Illustrative wedge lengths only — purely decorative, not a real score or
// the dimension's weight. See Signal Website Design Guidelines.md ->
// "Business AI Diagnostic visual language". Keyed by dimension number
// (not array position) so adding/reordering/removing a dimension in
// dimensions-data.ts can't silently misalign these — an unmatched number
// just falls back to DEFAULT_LENGTH below instead of rendering NaN.
const DEFAULT_LENGTH = 0.5;
const ILLUSTRATIVE_LENGTH: Record<string, number> = {
  "01": 0.55,
  "02": 0.78,
  "03": 0.42,
  "04": 0.85,
  "05": 0.6,
  "06": 0.38,
  "07": 0.68,
  "08": 0.8,
  "09": 0.9,
  "10": 0.48,
  "11": 0.72,
  "12": 0.58,
};

function polar(r: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.sin(a), y: CY - r * Math.cos(a) };
}

function sectorPath(rOuter: number, a0: number, a1: number) {
  const p0 = polar(rOuter, a0);
  const p1 = polar(rOuter, a1);
  const pi1 = polar(INNER_R, a1);
  const pi0 = polar(INNER_R, a0);
  return [
    `M ${p0.x.toFixed(2)} ${p0.y.toFixed(2)}`,
    `A ${rOuter.toFixed(2)} ${rOuter.toFixed(2)} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
    `L ${pi1.x.toFixed(2)} ${pi1.y.toFixed(2)}`,
    `A ${INNER_R} ${INNER_R} 0 0 0 ${pi0.x.toFixed(2)} ${pi0.y.toFixed(2)} Z`,
  ].join(" ");
}

function wrap(name: string, maxChars = CHARS_PER_LINE) {
  const words = name.toUpperCase().split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const trial = `${cur} ${w}`.trim();
    if (trial.length <= maxChars || !cur) {
      cur = trial;
    } else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

type LabelEntry = { text: string; color: string; size: number; weight: number };

function labelYs(mode: "above" | "below" | "center", y: number, n: number) {
  if (mode === "above") {
    return Array.from({ length: n }, (_, i) => y - (n - 1 - i) * LINE_H - 6);
  }
  if (mode === "below") {
    return Array.from({ length: n }, (_, i) => y + 6 + i * LINE_H);
  }
  const total = (n - 1) * LINE_H;
  const start = y - total / 2;
  return Array.from({ length: n }, (_, i) => start + i * LINE_H);
}

export function DimensionsRadial() {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full h-auto max-w-[640px]"
      role="img"
      aria-label="Radial diagram of the 12 Business AI Diagnostic dimensions, grouped and colour-coded by area: Strategy, Operation, Implementation and Governance"
    >
      <title>The 12 Business AI Diagnostic dimensions</title>
      {DIMENSIONS.map((dim, i) => {
        const centerAngle = i * STEP_DEG;
        const a0 = centerAngle - STEP_DEG / 2 + GAP_DEG / 2;
        const a1 = centerAngle + STEP_DEG / 2 - GAP_DEG / 2;
        const length = ILLUSTRATIVE_LENGTH[dim.number] ?? DEFAULT_LENGTH;
        const rOuter = INNER_R + length * (OUTER_R_MAX - INNER_R);
        const fill = WEDGE_FILL[dim.area];
        const accent = WEDGE_ACCENT[dim.area];

        const tick0 = polar(TICK_START, centerAngle);
        const tick1 = polar(TICK_END, centerAngle);
        const label = polar(LABEL_R, centerAngle);
        const theta = ((centerAngle % 360) + 360) % 360;

        let anchor: "start" | "end" | "middle";
        let mode: "above" | "below" | "center";
        if (theta === 0) {
          anchor = "middle";
          mode = "above";
        } else if (theta === 180) {
          anchor = "middle";
          mode = "below";
        } else if (theta < 180) {
          anchor = "start";
          mode = "center";
        } else {
          anchor = "end";
          mode = "center";
        }

        const entries: LabelEntry[] = [
          { text: dim.number, color: accent, size: NUM_SIZE, weight: 700 },
          ...wrap(dim.name).map((line) => ({
            text: line,
            color: NAME_GRAY,
            size: NAME_SIZE,
            weight: 500,
          })),
        ];
        const ys = labelYs(mode, label.y, entries.length);

        return (
          <g key={dim.number}>
            <path d={sectorPath(rOuter, a0, a1)} fill={fill} />
            <line
              x1={tick0.x}
              y1={tick0.y}
              x2={tick1.x}
              y2={tick1.y}
              stroke={accent}
              strokeWidth={2}
            />
            {entries.map((entry, idx) => (
              <text
                key={idx}
                x={label.x}
                y={ys[idx]}
                textAnchor={anchor}
                fontFamily="var(--font-body)"
                fontSize={entry.size}
                fontWeight={entry.weight}
                letterSpacing="0.03em"
                fill={entry.color}
              >
                {entry.text}
              </text>
            ))}
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r={INNER_R} fill="var(--color-surface-container-low)" />
    </svg>
  );
}
