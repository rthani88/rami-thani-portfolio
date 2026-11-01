"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  /** stagger delay in seconds, for sequential reveals inside a list */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
};

/**
 * Fades + lifts content in once, when it enters the viewport.
 * A single, intentional entrance — no scattered per-element effects.
 * Respects prefers-reduced-motion by skipping the animation entirely.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  const Component = as;
  return (
    <Component ref={ref as never} className={className}>
      {children}
    </Component>
  );
}
