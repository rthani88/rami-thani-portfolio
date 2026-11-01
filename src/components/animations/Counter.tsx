"use client";

import { useRef, useEffect, useState } from "react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";

type CounterProps = {
  /** e.g. "120", "15+", "SAR 4.5M" — only the leading numeric run is animated */
  value: string;
  className?: string;
};

/** Animates the numeric portion of a stat when it scrolls into view. */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el) return;

    const match = value.match(/[\d.]+/);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!match || prefersReduced) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[0]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);
    const decimals = match[0].includes(".") ? 1 : 0;
    const counter = { n: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => setDisplay(`${prefix}${counter.n.toFixed(decimals)}${suffix}`)
      });
    }, el);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
