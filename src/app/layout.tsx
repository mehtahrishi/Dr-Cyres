import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteData.brand.title,
  description: siteData.brand.description,
  icons: {
    icon: siteData.brand.logoSquare,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-white text-black selection:bg-[#155E63] selection:text-white">
        {children}
      </body>
    </html>
  );
}
