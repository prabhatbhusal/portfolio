

import "./globals.css";
import Navbar from "@/components/Navbar";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins", // Custom CSS variable
  display: "swap",
});

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
