import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "../styles/home.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Portfolio OGI",
  description: "Portfolio website OGI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <main> {children}</main>
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}
