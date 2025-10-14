"use client";

import "@/i18n";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <head />
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}