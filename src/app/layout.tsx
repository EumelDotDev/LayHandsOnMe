import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lay Hands on Me | Podcast",
  description: "A podcast for married couples exploring the intersection of spiritual and physical intimacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-foreground relative">
        <Navbar />
        <main className="flex-grow flex flex-col pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

