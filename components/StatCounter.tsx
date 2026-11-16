"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  durationMs?: number;
};

const DURATION_MS = 1600;

function format(value: number) {
  return value.toLocaleString("id-ID");
}

/**
 * Legacy parity for js/main.js initStatsCounter: 1600ms ease-out cubic, fire
 * once at 40% visibility. The final value is what renders on the server, so a
 * visitor without JS (or with reduced motion) never sees an empty counter.
 */
export function StatCounter({
  value,
  suffix = "",
  className,
  durationMs = DURATION_MS,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(() => format(value));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    setDisplay(format(0));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;
          started.current = true;
          observer.unobserve(entry.target);

          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(format(Math.floor(value * eased)));
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(format(value));
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} data-counter={value} className={className}>
      {display}
      {suffix}
    </span>
  );
}
