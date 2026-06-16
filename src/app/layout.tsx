import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZYRA — Redefine Every Step | Premium Sneakers",
  description:
    "Discover ZYRA's exclusive sneaker collection. Engineered for the streets, built for performance, designed for culture. Free shipping worldwide.",
  keywords: ["sneakers", "shoes", "streetwear", "ZYRA", "premium footwear"],
  openGraph: {
    title: "ZYRA — Redefine Every Step",
    description: "Discover ZYRA's exclusive sneaker collection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-[#a8ff3e]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
