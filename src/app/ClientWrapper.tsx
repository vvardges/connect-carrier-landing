"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}