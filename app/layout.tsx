import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ReactQueryProvider from "@/lib/reactQueryProvider";
import NavBar from "@/Components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Film Forge",
  description: "Film Forge Movies App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="pb-20 bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat">
          <NavBar />
        </div>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
