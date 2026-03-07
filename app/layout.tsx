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
  title: "Yenasoy - Sanoat Avtomatlashtirish Xizmatlari",
  description: "O'zbekistonning yetakchi sanoat avtomatlashtirish kompaniyasi, PLC dasturlash, HMI ishlab chiqish va SCADA tizimlarini o'z ichiga olgan keng qamrovli xizmatlarni taqdim etadi.",
  keywords: ["industrial automation", "PLC programming", "HMI development", "SCADA", "automation services", "Uzbekistan", "Yenasoy"],
  authors: [{ name: "Yenasoy" }],
  openGraph: {
    title: "Yenasoy - Sanoat Avtomatlashtirish Xizmatlari",
    description: "O'zbekistonning yetakchi sanoat avtomatlashtirish kompaniyasi, PLC dasturlash, HMI ishlab chiqish va SCADA tizimlarini o'z ichiga olgan keng qamrovli xizmatlarni taqdim etadi.",
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
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
