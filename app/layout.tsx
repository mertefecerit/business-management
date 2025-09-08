import type { Metadata } from "next";
import AppStoreProvider from "@/libs/app/providers/AppStoreProvider";
import { Inter } from "next/font/google";
import "@/libs/app/assets/css/globals.css";
import React from "react";

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
          className={`${inter.className} antialiased text-zinc-700 bg-zinc-100`}
      >
      <AppStoreProvider>
          {children}
      </AppStoreProvider>
      </body>
    </html>
  );
}
