"use client";

import "@/i18n";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

import { ThemeProvider } from "next-themes";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}