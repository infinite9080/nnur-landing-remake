import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "../components/preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nNur Inc - Cybersecurity & Compliance Solutions",
  description:
    "Leading cybersecurity and compliance solutions provider. Protect your business with our comprehensive security services including nAMS, nIAM, nErim, nBoard, and nISMA products.",
  keywords:
    "cybersecurity, compliance, security solutions, nAMS, nIAM, nErim, nBoard, nISMA, audit management, identity access management, risk management, board governance",
  authors: [{ name: "nNur Inc" }],
  creator: "nNur Inc",
  publisher: "nNur Inc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nnur.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "nNur Inc - Cybersecurity & Compliance Solutions",
    description:
      "Leading cybersecurity and compliance solutions provider. Protect your business with our comprehensive security services.",
    url: "https://nnur.ca",
    siteName: "nNur Inc",
    images: [
      {
        url: "/nNur Logo-Color-156x47.png",
        width: 156,
        height: 47,
        alt: "nNur Inc Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nNur Inc - Cybersecurity & Compliance Solutions",
    description:
      "Leading cybersecurity and compliance solutions provider. Protect your business with our comprehensive security services.",
    images: ["/nNur Logo-Color-156x47.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/nNur-Logo-Icon.svg",
    shortcut: "/nNur-Logo-Icon.svg",
    apple: "/nNur Logo-Color-156x47.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nNur-Logo-Icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/nNur Logo-Color-156x47.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7030a1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
