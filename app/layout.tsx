import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Business Management",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${inter.className} antialiased text-zinc-700`}
      >
        {children}
      </body>
    </html>
  );
}
