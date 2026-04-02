import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A&G Klempner – 24/7 Rohrreinigung & Notdienst Ingolstadt",
  description:
    "Professionelle Rohr- und Kanalreinigung in Ingolstadt und Umgebung. 24/7 Notdienst – auch an Feiertagen. Schnell, sauber, zuverlässig.",
  keywords: "Rohrreinigung Ingolstadt, Kanalreinigung, Klempner Notdienst, 24/7 Sanitär",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.className}>
      <body className="min-h-screen bg-[#040810] text-white antialiased">{children}</body>
    </html>
  );
}
