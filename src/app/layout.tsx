import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qasim Traders — Premium Rice, Spices & Fried Onions | Rawalpindi",
  description:
    "Qasim Traders, Rawalpindi — premium basmati rice, pure spices and crispy fried onions. Retail & wholesale. Call 0332 5555003.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
