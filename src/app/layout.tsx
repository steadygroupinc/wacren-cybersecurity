import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "WACREN Cybersecurity & Trust Programme",
  description: "Building Africa's Cybersecurity Trust Infrastructure for Research and Education — connecting communities, training, and threat intelligence.",
  keywords: ["WACREN", "Cybersecurity", "Research and Education Network", "Africa", "TrustBroker", "CyberBastion", "ISAC", "Incident Response"],
  authors: [{ name: "WACREN" }],
  openGraph: {
    title: "WACREN Cybersecurity & Trust Programme",
    description: "Strengthening cybersecurity resilience across Africa's research and education networks.",
    url: "https://cybersecurity.wacren.net",
    siteName: "WACREN Cybersecurity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WACREN Cybersecurity & Trust Programme",
    description: "Strengthening cybersecurity resilience across Africa's research and education networks.",
    site: "@wacren",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1c2c46",
};

import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
