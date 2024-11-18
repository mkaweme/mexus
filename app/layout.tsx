import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400","500","700"],
  variable: "--font-poppins",
});

const FuturaStdBook = localFont({
  src: [
    {
      path: "../public/assets/fonts/FuturaStdBook.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-futurastdbook",
});

const FuturaStd = localFont({
  src: [
    {
      path: "../public/assets/fonts/FuturaStdMedium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/FuturaStdBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futurastd",
});

export const metadata: Metadata = {
  title: "Mexus Industrial Solutions",
  description: "You premier engineering contractor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FuturaStd.className} ${FuturaStdBook.className} ${poppins.variable} $antialiased`}>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main>
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}
