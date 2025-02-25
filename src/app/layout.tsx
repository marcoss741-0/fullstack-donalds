import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";

interface MenuLayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSW Donalds",
  description: "Bora comer um Donalds?",
};

export default function RootLayout({ children }: MenuLayoutProps) {
  // TODO: Add provider
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <CartProvider>
          {children}
          <Toaster richColors position="top-right" />
        </CartProvider>
      </body>
    </html>
  );
}
