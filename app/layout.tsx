import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Operator Intelligence",
  description: "The intelligence briefing for people building and operating Shopify businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}