import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM SaaS",
  description: "CRM App for Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
