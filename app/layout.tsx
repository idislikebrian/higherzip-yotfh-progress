import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fire Horse Calendar Progress",
  description: "Break-even progress for the Year of the Fire Horse Calendar."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
