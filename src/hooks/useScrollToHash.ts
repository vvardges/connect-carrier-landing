"use client";
import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });
  }, []);

  return null;
}