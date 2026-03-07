"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";
import Link from "next/link";

const TELEGRAM_USERNAME = "F3Diyorbek";
const PHONE = "+998900697690";
const EMAIL = "info@yenasoy.uz";

export default function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Company */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/newlogo_icon.png"
                  alt="Yenasoy"
                  width={40}
                  height={20}
                  className="w-6 h-6 object-contain contrast-150"
                />
                <Image
                  src="/newlogo_text.png"
                  alt="Yenasoy"
                  width={120}
                  height={20}
                  className="w-18 h-10 object-contain contrast-150"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              {language === "ru"
                ? "Услуги промышленной автоматизации"
                : language === "uz"
                  ? "Sanoat avtomatlashtirish xizmatlari"
                  : "Industrial Automation Services"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-4">
              {language === "ru" ? "Навигация" : language === "uz" ? "Navigatsiya" : "Navigation"}
            </h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t.nav.services}
              </a>
              <a href="#benefits" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t.nav.benefits}
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-4">
              {t.contact.info.title}
            </h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            {t.footer.copyright} · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
