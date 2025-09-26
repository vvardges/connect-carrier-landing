import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connect Carrier | HAYWAY",
    icons: {
      icon: "/images/favicon.png",
    }
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
