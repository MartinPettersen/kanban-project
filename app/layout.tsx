import type { Metadata } from "next";

import "./globals.css";

import { Providers } from "./Redux/provider";

export const metadata: Metadata = {
  title: "Kanban task tracker",
  description: "Kanban task tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-radial from-[#55657b] to-[#222831]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
