import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bmcareservices.com'),
  title: {
    default: "BMCARE Services Limited - Compassionate Care You Can Trust",
    template: "%s | BMCARE Services Limited",
  },
  description: "BMCARE Services Limited provides high-quality Health and Social Care, Catering, and Domestic Support services across Ireland.",
  keywords: [
    'health care services Ireland',
    'social care services',
    'care staffing agency',
    'domestic support Ireland',
    'catering services Ireland',
  ],
  authors: [{ name: "BMCARE Services Limited" }],
  creator: "BMCARE Services Limited",
  publisher: "BMCARE Services Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: "BMCARE Services Limited",
    title: "BMCARE Services Limited - Compassionate Care You Can Trust",
    description: "High-quality Health and Social Care, Catering, and Domestic Support services across Ireland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMCARE Services Limited - Compassionate Care You Can Trust",
    description: "High-quality Health and Social Care, Catering, and Domestic Support services across Ireland.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
