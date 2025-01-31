"use client";

import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you'd like to use
});

const client = new ApolloClient({
  uri: 'https://us-west-2.cdn.hygraph.com/content/cm6jghoxg001j07ul2xm9qnp9/master',
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </html>
  );
}
