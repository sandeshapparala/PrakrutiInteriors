import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prakruti Interiors - Interior that Reflects your Style",
  description: "Eco-friendly fibre wood interiors with spiritual and elegant aesthetic. We specialize in creating beautiful, meaningful spaces that nurture peace, positivity, and purpose.",
  keywords: ["interior design", "eco-friendly interiors", "fibre wood", "modular kitchen", "home interiors", "office interiors", "spiritual design"],
  authors: [{ name: "Prakruti Interiors" }],
  creator: "Prakruti Interiors",
  icons: {
    icon: "/icon-bg.png",
    shortcut: "/icon-bg.png",
    apple: "/icon-bg.png",
  },
  openGraph: {
    title: "Prakruti Interiors - Interior that Reflects your Style",
    description: "Eco-friendly fibre wood interiors with spiritual and elegant aesthetic",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakruti Interiors - Interior that Reflects your Style",
    description: "Eco-friendly fibre wood interiors with spiritual and elegant aesthetic",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased font-inter`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
