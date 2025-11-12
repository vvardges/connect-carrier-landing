"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  if (typeof window === "undefined") return;
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
}
