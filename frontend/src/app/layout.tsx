import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // 400 = normal, 700 = bold
  variable: "--font-merriweather",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Raihan Shamil",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${merriweather.variable} antialiased w-full`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
