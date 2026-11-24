import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/siteData";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-black selection:bg-[#155E63] selection:text-white">
        {children}
      </body>
    </html>
  );
}
