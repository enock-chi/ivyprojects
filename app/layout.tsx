import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivy Projects",
  description: "Flourist",
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
        <div className="block md:hidden h-auto pb-[5vh]">
          <Navbar />
          {children}
          <Footer />
        </div>
        <div className="hidden md:block w-full h-[80vh]">
          <p className="px-[5vw] py-2 rounded-xl mx-auto mt-[48vh] text-center border w-[50vw] h-[5vh] border-black text-black">Please use mobile view.</p>
        </div>
      </body>
    </html>
  );
}
