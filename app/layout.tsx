import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yenasoy - Industrial Automation Services",
  description: "Comprehensive industrial automation solutions: PLC programming, HMI development, diagnostics, and technical support for manufacturing enterprises.",
  keywords: ["industrial automation", "PLC programming", "HMI development", "SCADA", "automation services", "Uzbekistan", "Yenasoy"],
  authors: [{ name: "Yenasoy" }],
  openGraph: {
    title: "Yenasoy - Industrial Automation Services",
    description: "Comprehensive industrial automation solutions for manufacturing enterprises",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["uz_UZ", "en_US"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
