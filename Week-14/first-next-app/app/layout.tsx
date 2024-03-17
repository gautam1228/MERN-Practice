import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// This is how the layout of every page is defined.
// If you return an app bar inside this, it will be visible over all the pages.


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
