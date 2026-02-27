import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DegenSim — Master Digital Trading",
  description:
    "Train with real market data. Zero risk. Real skills. A premium crypto trading simulator built for serious traders.",
  keywords: [
    "crypto",
    "trading",
    "simulator",
    "web3",
    "defi",
    "bitcoin",
    "ethereum",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
