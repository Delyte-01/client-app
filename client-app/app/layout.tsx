import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/Component/lenis-smooth-scroll";
import { Toaster } from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: "BuchiLondon Enterprises",
  description: "  Discover our curated collection of premium perfumes, luxurious hair care products, and stylish accessories. Quality you can trust, prices you'll love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
          <Toaster richColors />
        </SmoothScroll>
      </body>
    </html>
  );
}
