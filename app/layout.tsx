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
  title: "SAVORIA | Premium Food Showcase",
  description: "Experience SAVORIA Fine Dining. A premium interactive food showcase with a curated menu, exquisite flavors, and modern culinary art.",
  keywords: ["fine dining", "restaurant menu", "gourmet food", "savoria", "premium dining"],
  // Replace with your actual production URL
  metadataBase: new URL("https://savoria.com"),
  openGraph: {
    title: "SAVORIA | Premium Food Showcase",
    description: "Experience SAVORIA Fine Dining. Discover our premium curated menu.",
    url: "https://savoria.com",
    siteName: "SAVORIA",
    images: [
      {
        url: "/opengraph-image.png", // Next.js will resolve this from the public/ folder if explicitly listed
        width: 1200,
        height: 630,
        alt: "SAVORIA Fine Dining Menu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAVORIA | Premium Food Showcase",
    description: "Experience SAVORIA Fine Dining. Discover our premium curated menu.",
    images: ["/opengraph-image.png"], // Reuses OG image or you can use a separate /twitter-image.png
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
