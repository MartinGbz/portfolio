import type { Metadata } from "next";
import { Kanit, Doppio_One as Doppio } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kanit",
});
const doppio = Doppio({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-doppio",
});

export const metadata: Metadata = {
  title: "MartinGbz",
  description: "Martingbz's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${doppio.variable}`}>{children}</body>
    </html>
  );
}
