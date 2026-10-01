"use client";

import { useMemo } from "react";

// Deterministic pseudo-random so server and client render the same SVG.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

type Kind = "rice" | "spices" | "onions";

export default function ProductArt({ kind, height = 220 }: { kind: Kind; height?: number | string }) {
  const shapes = useMemo(() => {
    const r = rng(kind === "rice" ? 7 : kind === "spices" ? 21 : 42);
    if (kind === "rice") {
      return Array.from({ length: 70 }, (_, i) => {
        const cx = 20 + r() * 360;
        const cy = 20 + r() * 180;
        const rot = r() * 180;
        const l = 13 + r() * 6;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={l}
            ry={2.6}
            transform={`rotate(${rot} ${cx} ${cy})`}
            fill={r() > 0.85 ? "#E9D9AE" : "#FFFBF0"}
            stroke="rgba(120,100,60,0.25)"
            strokeWidth={0.6}
          />
        );
      });
    }
    if (kind === "spices") {
      const heaps = [
        { cx: 110, cy: 150, rx: 95, color: "#B4492B", dot: "#8E2F18" },
        { cx: 280, cy: 160, rx: 90, color: "#D99A1E", dot: "#A8730F" },
        { cx: 200, cy: 95, rx: 70, color: "#6B4A2B", dot: "#3F2A16" },
      ];
      return heaps.flatMap((h, hi) => [
        <ellipse key={`h${hi}`} cx={h.cx} cy={h.cy} rx={h.rx} ry={h.rx * 0.55} fill={h.color} opacity={0.95} />,
        ...Array.from({ length: 40 }, (_, i) => {
          const a = r() * Math.PI * 2;
          const d = Math.sqrt(r());
          return (
            <circle
              key={`d${hi}-${i}`}
              cx={h.cx + Math.cos(a) * h.rx * 0.85 * d}
              cy={h.cy + Math.sin(a) * h.rx * 0.45 * d}
              r={0.8 + r() * 1.6}
              fill={h.dot}
              opacity={0.55}
            />
          );
        }),
      ]);
    }
    return Array.from({ length: 34 }, (_, i) => {
      const cx = 30 + r() * 340;
      const cy = 25 + r() * 170;
      const rad = 10 + r() * 16;
      const start = r() * 360;
      const sweep = 140 + r() * 160;
      const a1 = (start * Math.PI) / 180;
      const a2 = ((start + sweep) * Math.PI) / 180;
      const x1 = cx + rad * Math.cos(a1);
      const y1 = cy + rad * Math.sin(a1);
      const x2 = cx + rad * Math.cos(a2);
      const y2 = cy + rad * Math.sin(a2);
      const shade = ["#8A4B14", "#A85F1C", "#C27A2C", "#6E3A0E"][Math.floor(r() * 4)];
      return (
        <path
          key={i}
          d={`M ${x1} ${y1} A ${rad} ${rad} 0 ${sweep > 180 ? 1 : 0} 1 ${x2} ${y2}`}
          fill="none"
          stroke={shade}
          strokeWidth={3 + r() * 3}
          strokeLinecap="round"
        />
      );
    });
  }, [kind]);

  return (
    <svg viewBox="0 0 400 220" width="100%" height={height} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {shapes}
    </svg>
  );
}
