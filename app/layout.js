"use client";

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maxime Pagnoulle",
  description:
    "Maxime Pagnoulle is a Software Engineer with a passion to turn ideas into user-centric applications",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="w-full h-full absolute top-0 left-0 -z-[1]">
          <div
            className="absolute bg-gradient h-1/2 w-full"
            id="bgGradient"
          ></div>
          <div className="absolute w-full h-1/2 bg-grid" id="bgGrid"></div>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
  y;
}
