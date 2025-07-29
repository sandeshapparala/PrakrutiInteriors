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
    "budget friendly interior design",

    // Extended Regional Keywords
    "Affordable modular kitchen designers in Andhra Pradesh",
    "Best custom wardrobes and furniture Telangana",
    "Complete interior design services in Vijayawada",
    "Interior Designers in Andhra Pradesh",
    "Interior Design Company in Telangana",
    "Best Modular Kitchens in Vijayawada",
    "Home Interior Solutions in Hyderabad",
    "Custom Furniture Designers in Guntur",
    "Smart Home Automation Telangana",
    "Kitchen Interior Design Warangal",
    "False Ceiling Contractors in Visakhapatnam",

    // Specialized Services
    "ACP Cladding Contractors",
    "Glass Curtain Wall Designers",
    "Commercial Interior Design Solutions",
    "Home Automation Systems",
    "Motion Sensor Smart Lights",
    "Touch Light Mirrors for Bathrooms",
    "Termite-Proof Doors",
    "UPVC Windows and French Doors",
    "Aluminium Window Shutters",
    "Designer Main Door Ideas",
    "Soundproof Windows for Homes",
    "Stretch Ceilings for Modern Homes",
    "3D Wall Panels for Bedroom",
    "Vertical Garden Wall Panels",

    // Custom Furniture & Design
    "Custom Furniture for Living Room",
    "Designer Sofas and Beds",
    "Wooden TV Units with Storage",
    "Child Room Furniture Ideas",
    "Artificial Grass Wall Decor",
    "Roller & Zebra Blinds Suppliers",

    // Complete Solutions
    "Turnkey Interior Design Solutions",
    "Full Home Interior Package",
    "Modular Kitchen with Installation",
    "Custom Wardrobes and Furniture",
    "Living Room Design Ideas",
    "Best Bedroom Interior Designs",
    "Modern TV Unit Designs",
    "Waterproof WPC Doors and Frames",
    "Customized Wall Paneling Services",

    // General Interior Design
    "Best Interior Designers Near Me",
    "Interior Design Company",
    "Home Interior Services",
    "Luxury Interior Designers",
    "Interior Designers for Homes",
    "Modular Kitchen Designers",
    "Residential Interior Designers",
    "Complete Home Renovation",
    "Affordable Interior Designers",
    "Interior Decoration Services",

    // State-Specific Services
    "Modular Kitchen Designers in Telangana",
    "Termite-Proof Cupboards Andhra Pradesh",
    "Digital WPC Cupboards AP & TS",
    "Glass Partition Designers in Telangana",
    "Toughened Glass Works Vijayawada",
    "Waterproof WPC Doors Andhra Pradesh",
    "Exterior Elevation Design in Vijayawada",

    // City-Specific Keywords
    "Interior Designers in Hyderabad",
    "Custom Furniture in Warangal",
    "Modular Kitchen Services in Karimnagar",
    "Best Home Interiors in Nizamabad",
    "Designer Cupboards in Khammam",
    "Home Automation in Secunderabad",
    "Interior Designers in Vijayawada",
    "Home Interiors in Guntur",
    "Modular Kitchen in Rajahmundry",
    "Furniture Designers in Kakinada",
    "Wall Paneling in Tirupati",
    "UPVC Doors in Visakhapatnam",

    // Top-Level Regional Keywords
    "Best Interior Designers in Andhra Pradesh",
    "Top Interior Designers in Telangana",
    "Complete Home Interiors in Andhra & Telangana",
    "Modular Kitchen Designers in Andhra Pradesh",
    "Custom Furniture Solutions in Telangana",
    "Home Interior and Exterior Designers AP & TS",
    "Interior Decorators in Andhra Pradesh and Telangana",
    "Luxury Home Interiors South India",
    "Modern Interior Design Services in AP & Telangana"
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
