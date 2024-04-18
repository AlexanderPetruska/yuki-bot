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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className + ""}>
        <div className="flex min-h-dvh flex-col gap-7 md:gap-14">
          <NavBar />
          <div className="w-full flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
