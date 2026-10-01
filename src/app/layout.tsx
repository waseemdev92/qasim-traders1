import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import ThemeRegistry from "@/components/ThemeRegistry";
import { CartProvider } from "@/components/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qasim Traders | Rice, Spices & Pulses since 1952",
  description: "Qasim Traders – premium steam rice and pure spices, sold per kg and per 25 kg bag with delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <CartProvider>{children}</CartProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
