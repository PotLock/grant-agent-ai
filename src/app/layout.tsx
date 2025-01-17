import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "grants.fun",
  description: "grants.fun is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems.",
  keywords: [
    "grants",
    "NEAR Protocol",
    "AI",
    "blockchain",
    "grant distribution",
    "autonomous agents",
    "web3",
    "cryptocurrency",
  ],
  authors: [{ name: "Potlock team" }],
  openGraph: {
    title: "grants.fun - AI-Powered Grant Distribution Platform",
    description: "grants.fun is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems.",
    type: "website",
    locale: "en_US",
    siteName: "grants.fun",
  },
  twitter: {
    card: "summary_large_image",
    title: "grants.fun - AI-Powered Grant Distribution Platform",
    description: "grants.fun is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
