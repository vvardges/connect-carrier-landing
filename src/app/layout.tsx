"use client"

import "@/i18n";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import ClientWrapper from "@/app/ClientWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <head />
      <body>
        {loading ? <PreLoader /> : <ClientWrapper>{children}</ClientWrapper>}
      </body>
    </html>
  );
}