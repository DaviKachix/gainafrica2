import "./globals.css";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import SiteAside from "@/components/site-aside";
import { ConvexClientProvider } from "@/components/convex-client-provider";

export const metadata: Metadata = {
  title: "GAiN Tanzania 2026",
  description: "Integrated for Mission — GAiN Tanzania 2026 Conference",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden relative">
        {/* Sidebar */}
        <SiteAside />

        {/* Header */}
        <div className="relative z-40 sm:pr-20 lg:pr-24">
          <SiteHeader />
        </div>

        {/* Page Content */}
        <main className="relative z-10 min-h-screen sm:pr-20 lg:pr-24 transition-all duration-300">
          {children}
        </main>
        {/* Footer */}
        <SiteFooter />

        
      </body>
    </html>
  );
}

