"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Observe existing legacy reveal targets after each App Router navigation. */
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>(".reveal:not(.visible)")];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!nodes.length || media.matches || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    document.documentElement.classList.add("reveal-ready");
    // Fragment navigation must never leave a target hidden while scrolling to it.
    const target = decodeURIComponent(location.hash.slice(1));
    if (target) document.getElementById(target)?.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, [pathname]);
  return null;
}
