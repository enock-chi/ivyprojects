import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import and configure Merienda font


const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you'd like to use
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
        className={` ${merienda.variable} antialiased font-merienda`}
      >
        <div className="block md:hidden h-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
        <div className="hidden md:block w-full h-[80vh]">
          <p className="px-[5vw] py-2 rounded-xl mx-auto mt-[48vh] text-center border w-[50vw] h-[5vh] border-black text-black">
            Please use mobile view.
          </p>
        </div>
      </body>
    </html>
  );
}
