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
  title: "Prakruti Interiors | Best Interior Designers in Vijayawada | Modular Kitchens, Furniture, Interiors & Exteriors",
  description: "Transform your space with Prakruti Interiors - Vijayawada's trusted name in luxury & budget-friendly interior design. Modular kitchens, furniture, pest-resistant interiors & more.",
  keywords: [
    // Primary Keywords (High Volume + Local Intent)
    "Interior Designers in Vijayawada",
    "Best Interior Decorators in Vijayawada", 
    "Modular Kitchen in Vijayawada",
    "Residential Interior Designers Vijayawada",
    "Commercial Interior Designers Vijayawada",
    "Custom Furniture Vijayawada",
    "Home Interior Designers Vijayawada",
    
    // Service-Specific Keywords
    "Termite Proof Interiors Vijayawada",
    "Pest Resistant Furniture Vijayawada", 
    "Waterproof Interiors Vijayawada",
    "Modular Wardrobes Vijayawada",
    "Ceiling Design Vijayawada",
    "False Ceiling Contractors Vijayawada",
    "Home Renovation Vijayawada",
    "Wall Design and Painting Vijayawada",
    "Custom Cupboards Vijayawada",
    "Flooring Solutions Vijayawada",
    "Facade Design Vijayawada",
    "Windows and Doors Design Vijayawada",
    "Interior Elevations Vijayawada",
    "Luxury Interiors Vijayawada",
    "Affordable Interiors Vijayawada",
    
    // Additional Brand Keywords
    "Prakruti Interiors",
    "Andhra Pradesh interior designers",
    "eco-friendly interiors",
    "fibre wood furniture",
    "spiritual design",
    "budget friendly interior design"
  ],
  authors: [{ name: "Prakruti Interiors" }],
  creator: "Prakruti Interiors",
  publisher: "Prakruti Interiors",
  metadataBase: new URL('https://www.prakrutiinteriors.com'),
  alternates: {
    canonical: 'https://www.prakrutiinteriors.com',
  },
  icons: {
    icon: "/icon-bg.png",
    shortcut: "/icon-bg.png",
    apple: "/icon-bg.png",
  },
  openGraph: {
    title: "Prakruti Interiors | Best Interior Designers in Vijayawada",
    description: "Transform your space with Prakruti Interiors - Vijayawada's trusted name in luxury & budget-friendly interior design. Modular kitchens, furniture, pest-resistant interiors & more.",
    type: "website",
    locale: "en_US",
    url: "https://www.prakrutiinteriors.com",
    siteName: "Prakruti Interiors",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Prakruti Interiors - Best Interior Designers in Vijayawada"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakruti Interiors | Best Interior Designers in Vijayawada",
    description: "Transform your space with Prakruti Interiors - Vijayawada's trusted name in luxury & budget-friendly interior design.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual Google verification code
  },
  category: 'Interior Design',
  classification: 'Business',
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
