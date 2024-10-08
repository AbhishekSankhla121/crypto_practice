"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeadNav from "@/Components/TopHeadNav";
import BottomNav from "@/Components/bottomNav";
import NavBar from "@/Components/Navbar";
import NavSlideOut from "@/Components/MobNavigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = (): any => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1D232A] relative  Scroll-none`}>
        <div className=" sticky top-0  z-50">
          <TopHeadNav />
          <NavBar toggleMenu={toggleMenu} />
          <BottomNav />
        </div>

        <div className="">
          <NavSlideOut isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        {children}
      </body>
    </html>
  );
}
