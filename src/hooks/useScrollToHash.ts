"use client";
import { useEffect } from "react";

export default function ScrollToHash() {
  const pathname = window.location;
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });
  }, [pathname]);

  return null;
}