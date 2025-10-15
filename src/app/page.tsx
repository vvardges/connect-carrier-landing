/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";

import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ScrollToHash from "@/hooks/useScrollToHash";

export const metadata: Metadata = {
  title: "Connect Carrier | HAYWAY",
  icons: {
    icon: "/images/favicon.png",
  }
};

export default function Home() {
  return (
    <main>
      <ScrollToHash />
      <ScrollUp />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
