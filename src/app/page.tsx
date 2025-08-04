import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

const mockPosts = [
  {
    title: "Understanding React 19: What’s New?",
    coverImage: "/images/blog/blog-01.jpg",
    excerpt:
      "Explore the latest features in React 19 and how they can improve your development workflow.",
    date: "2025-07-21",
    slug: "understanding-react-19",
  },
  {
    title: "Tailwind CSS Tips & Tricks",
    coverImage: "/images/blog/blog-02.jpg",
    excerpt:
      "Boost your productivity with our favorite Tailwind CSS techniques for rapid UI development.",
    date: "2025-06-30",
    slug: "tailwind-css-tips",
  },
  {
    title: "Next.js 15: Server Actions Unveiled",
    coverImage: "/images/blog/blog-03.jpg",
    excerpt:
      "Discover how to use Server Actions in Next.js 15 for powerful full-stack capabilities.",
    date: "2025-08-01",
    slug: "nextjs-15-server-actions",
  },
];

export const metadata: Metadata = {
  title: "Play Next.js - SaaS Starter Kit and Boilerplate for Next.js",
  description:
    "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={mockPosts} />
      <Contact />
      <Clients />
    </main>
  );
}
