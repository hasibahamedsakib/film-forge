import type { Metadata } from "next";
import "./globals.css";

import ReactQueryProvider from "@/lib/reactQueryProvider";
import NavBar from "@/app/Components/Navbar/Navbar";

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
      <body className={`antialiased`}>
        <div className="pb-20 bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat">
          <NavBar />
        </div>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
