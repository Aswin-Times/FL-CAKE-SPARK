import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAKE SPARK — Artisanal Cakes & Custom Celebrations",
  description:
    "Handcrafted custom celebration cakes, wedding tiers, cupcakes, and bakery treats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-[#fffdfa] text-stone-900">
        {children}
      </body>
    </html>
  );
}
