
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutClient from "@/components/LayoutClient";

import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumunate",
  description:
    "We specialize in web and mobile development, systems integration and digital marketing to help businesses thrive in today’s fast-paced digital world.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PRELOAD the NEW .WOFF2 FONT (Crucial for Speed Index) */}
        <link
          rel="preload"
          href="/fonts/NeueMontreal-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${montserrat.className}`} suppressHydrationWarning>
        {/* Wrapped the client logic here */}
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
