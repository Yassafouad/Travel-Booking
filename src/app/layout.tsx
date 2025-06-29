import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "TravelBook - Book Your Next Adventure",
  description: "Find and book flights to the world's most amazing destinations with ease. Compare prices and create unforgettable memories.",
  keywords: ["travel", "flights", "booking", "destinations", "vacation", "tourism"],
  authors: [{ name: "TravelBook Team" }],
  creator: "TravelBook",
  publisher: "TravelBook",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "TravelBook - Book Your Next Adventure",
    description: "Find and book flights to the world's most amazing destinations with ease.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelBook - Book Your Next Adventure",
    description: "Find and book flights to the world's most amazing destinations with ease.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
