import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
import { SessionProvider } from "next-auth/react";
export const metadata: Metadata = {
  title: "URL Shortener - Short URLs & Custom Free Link Shortener | Bitly",
  description:
    "Bitly’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
