import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuki Bot",
  description: "Best discord music bot - Yuki",
  // metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={inter.className + ""}>
        <div className="flex min-h-dvh flex-col gap-7 md:gap-14">
          <NavBar />
          <div className="flex w-full flex-1 items-center justify-center">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
